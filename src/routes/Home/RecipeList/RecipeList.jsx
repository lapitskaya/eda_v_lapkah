import styles from './RecipeList.css';
import React from "react";

class RecipeList extends React.Component {
    renderRecipe(recipes, i) {
        return (
            <p key={i}>{recipes[i]}</p>
        )
    }

    render() {
        const recipes = this.props.recipes;
        let recipeList = [];
        for (let recipeNum = 0; recipeNum < recipes.length; recipeNum++) {
            recipeList.push(this.renderRecipe(recipes, recipeNum));
        }
        return (
            <ul className={styles.recipes}>
                {recipeList}
            </ul>
        );
    }
}

export default RecipeList;
