import React from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {
    handleClick = () => {
        this.props.loadSampleRecipes();
        this.props.loadSampleIngredients();
    }

    render() {
        // console.log(this.props.recipes);
        return (
            <div className="recipe-list">
                
                <h2>Recipes</h2>
                {Object.keys(this.props.recipes).map(key => <Recipe
                                                              key={key}
                                                              index={key}
                                                              recipe={this.props.recipes[`${key}`]}
                                                            />
                )}
                <button onClick={this.handleClick}>Load Sample Data</button>
            </div>
        )
    }
}

export default RecipeList