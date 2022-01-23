import  './Home.css';
import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRecipe: false,
            recipe: {
                contentType: '',
                isLink: true,
                typing: '',
                content: ''
            },
        };

        this.setRecipeContent = this.setRecipeContent.bind(this);
        this.setNewRecipe = this.setNewRecipe.bind(this);
    }

    setRecipeContent(e) {
        this.setState({
            recipe: {
                typing: e.target.value,
            }
        })
    }

    setNewRecipe(e) {
        this.setState((prevState) => {
            return {
                hasRecipe: true,
                recipe: {
                    content: prevState.recipe.typing,
                },
            };
        });
        this._input.focus();
        this._input.value = "";
        e.preventDefault();
    }

    render() {
        return (
            <>
                <p className="description">Здесь добавляют рецепты.</p>
                <div>{this.state.recipe.content}</div>
                <form onSubmit={this.setNewRecipe}>
                    <input onChange={this.setRecipeContent} ref={(el) => this._input = el} placeholder="Ссылка на рецепт"/>
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
