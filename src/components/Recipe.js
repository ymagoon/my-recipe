import React from 'react';

class Recipe extends React.Component {
  render() {
    return (
      <div className="recipe" key={this.props.index}>
        <p>{this.props.recipe.title}</p>
        <p>{this.props.recipe.description}</p>
        <p>{this.props.recipe.cookingTime}</p>
        <p>{this.props.recipe.prepTime}</p>
        <p>{this.props.recipe.servingSize}</p>
      </div>
      
    )
  }
}

export default Recipe;

// const recipe = {
//     title: 'cabbage soup',
//     description: 'declisious and hearty!',
//     image: '/test/url',
//     cookingTime: '45 min',
//     prepTime: '15 min',
//     servingSize: 4,
//     instructions: {},
//     ingredients: {}
// }

