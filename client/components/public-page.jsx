import React from 'react';
import TopBar from './top-bar';
import RecipeList from './recipe-list-item';

class PublicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.error(err));
  }

  generateRecipes() {
    if (this.state.recipes.length > 0) {
      const recipeArr = this.state.recipes.map(index => {
        return <RecipeList recipe={index} key={index.recipeId} />;
      });
      return recipeArr;
    }
  }

  render() {
    return (
      <React.Fragment>
        <TopBar/>
        <div className="my-recipe">
          {this.generateRecipes()}
        </div>
      </React.Fragment>

    );
  }
}

export default PublicPage;
