import './RecipesRenderer.css';
import RecipeList from "../RecipeList/RecipeList";
import React from "react";
import PropTypes from "prop-types";

function RecipesRenderer(props) {
    const hasRecipe = props.hasRecipe;
    if (hasRecipe) {
        return (
            <RecipeList recipes={props.recipes} />
        );
    }
    return <p className="description">У вас пока нет рецептов, но вы можете их добавить!</p>;
}

RecipesRenderer.propTypes = {
    hasRecipe: PropTypes.bool,
    recipes: PropTypes.array,
}

export default RecipesRenderer;
