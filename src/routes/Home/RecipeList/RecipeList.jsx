import './RecipeList.css';
import React from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

class RecipeList extends React.Component {
    renderRecipe(recipes, i) {
        return (
            <Recipe key={i} recipe={recipes[i]} />
        )
    }

    render() {
        const recipes = this.props.recipes;
        let recipeList = [];
        for (let recipeNum = 0; recipeNum < recipes.length; recipeNum++) {
            recipeList.push(this.renderRecipe(recipes, recipeNum));
        }
        return (
            <>
                <ul className="recipes">
                    {recipeList}
                </ul>
            </>
        );
    }
}

RecipeList.propTypes = {
    recipes: PropTypes.array
}

export default RecipeList;
