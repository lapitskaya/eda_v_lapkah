import  './Home.css';
import React from "react";
import RecipeList from "./RecipeList/RecipeList";

function RecipesRenderer(props) {
    const hasRecipe = props.hasRecipe;
    if (hasRecipe) {
        return (
            <RecipeList recipes={props.recipes} />
        );
    }
    return <p className="description">Здесь добавляют рецепты.</p>;
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRecipe: false,
            recipes: [],
            inputVal: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputVal: e.target.value,
        });
    }

    addRecipe(newRecipe) {
        let recipes = this.state.recipes;
        recipes.push(newRecipe);
        return recipes;
    }

    handleSubmit(e) {
        this.setState({
            hasRecipe: true,
            recipes: this.addRecipe(this.state.inputVal),
        });
        this._input.focus();
        this._input.value = "";
        e.preventDefault();
    }

    render() {
        return (
            <>
                <RecipesRenderer hasRecipe={this.state.hasRecipe} recipes={this.state.recipes} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} ref={(el) => this._input = el} placeholder="Ссылка на рецепт"/>
                    <button type="submit">Добавить</button>
                </form>
            </>
        /* селект с вариантами (написать, добавить фото, прикрепить ссылку с описанием, ембед видео с ютуба, ссылка на пост в инсте)
           заполнение доп полей - кнопка сохранить
        */
        );
    }
}

export default Home;
