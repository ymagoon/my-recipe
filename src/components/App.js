import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import { sampleRecipes, sampleIngredients } from '../sample-data.js'

class App extends React.Component {
  state = {
    ingredients: {},
    instructions: {},
    recipes: {},
    shoppingList: {
      ingredients: {}
    }
  }

  componentDidMount() {
    this.loadSampleIngredients();
    this.loadSampleRecipes();
  }

  addRecipe = recipe => {
    // copy state
    const recipes = { ...this.state.recipes };
    // add recipe to copy
    recipes[`recipe${Date.now()}`] = recipe;
    // set state
    this.setState({
      ...this.state,
      recipes: recipes 
    });
  }

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
  }

  addIngredient = ingredient => {
    // copy state
    const ingredients = { ...this.state.ingredients };
    // add ingredient to copy
    ingredients[`ingredient${Date.now()}`] = ingredient;

    // set state
    this.setState({ 
      ...this.state,
      ingredients: ingredients 
    });
  }

  updateIngredient = ingredient => {
    // copy state
    const ingredients = { ...this.state.ingredients };

    ingredients[ingredient].price = 99;

    // set state
    this.setState({ 
      ...this.state,
      ingredients: ingredients 
    });
  }

  loadSampleIngredients = () => {
    this.setState({ ingredients: sampleIngredients });
  }

  addIngredientToRecipe = (recipe, ingredient) => {
    // copy state
    const recipes = { ...this.state.recipes };

    // add ingredient
    recipes[recipe].ingredients[ingredient] = this.state.ingredients[ingredient];
    recipes[recipe].ingredients[ingredient].qty = recipes[recipe].ingredients[ingredient].qty + 1 || 1; // not sure if this is needed
    // set state
    this.setState({ 
      ...this.state,
      recipes: recipes });
  }

  deleteIngredientFromRecipe = (recipe, ingredient) => {
    // copy state
    const recipes = { ...this.state.recipes };

    // remove ingredient from recipe
    delete recipes[recipe].ingredients[ingredient];

    // set state
    this.setState({ recipes: recipes });
  }

  addIngredientsToShoppingList = (ingredients) => {
    // copy state
    const shoppingList = { ...this.state.shoppingList}

    // add ingredient or increase qty
    Object.keys(ingredients).forEach(ingredient => {
      const newIngredient = ingredients[ingredient] // copy current incoming ingredient

      // add qty together
      if (shoppingList.ingredients[ingredient]) {
        shoppingList.ingredients[ingredient].qty += newIngredient.qty;
      } else {
        shoppingList.ingredients[ingredient] = newIngredient;
      }
    });
    console.log(shoppingList);

    // set state
    this.setState({ 
      ...this.state,
      shoppingList: shoppingList 
    }); // for some reason when a new ingredient is added, it does not work!
  }

  deleteIngredientsFromShoppingList = (ingredients) => {
    // copy state
    const shoppingList = { ...this.state.shoppingList}

    // remove ingredients
    Object.keys(ingredients).forEach(ingredient => { shoppingList.ingredients[ingredient].qty -= ingredients[ingredient].qty });

    // set state
    this.setState({ shoppingList: shoppingList });
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <Header tagline="The Best of the Best" />
          <RecipeList 
            recipes={this.state.recipes}
            addRecipe={this.addRecipe}
            loadSampleRecipes={this.loadSampleRecipes}
            loadSampleIngredients={this.loadSampleIngredients}
          />
        </div>
      </div>
    );
  }
}

export default App;
