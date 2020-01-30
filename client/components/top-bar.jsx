import React from 'react';
import { Link } from 'react-router-dom';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mealPlanIcon = this.props.mealPlanIcon
      ? <img src="/images/tomato-milk.png" className="mealPlanIcon"/>
      : null;
    const addRecipeIcon = this.props.addRecipeIcon
      ? <i className="fas fa-plus-circle addRecipeIcon"/>
      : null;
    return (
      <div className="
        title
        py-3
       mb-3
        justify-content-center
        d-flex
        row
        align-items-center
        "
      >
        <Link to={'/add-recipe'}>
          {addRecipeIcon}
        </Link>
        <div>
          {this.props.title}
        </div>
        <Link to={'/shoppingList'}>
          {mealPlanIcon}
        </Link>
      </div>
    );
  }
}
