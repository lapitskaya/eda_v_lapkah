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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            recipe: {
                typing: e.target.value,
            }
        })
    }

    handleSubmit(e) {
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
