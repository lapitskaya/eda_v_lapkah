import './Recipe.css';
import React from "react";

class Recipe extends React.Component {
    render() {
        return (
            <li className="card">
                <p>{this.props.recipe}</p>
            </li>
        );
    }
}

export default Recipe;
