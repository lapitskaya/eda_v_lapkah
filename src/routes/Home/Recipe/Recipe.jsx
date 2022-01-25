import './Recipe.css';
import React from "react";
import PropTypes from "prop-types";

class Recipe extends React.Component {
    render() {
        return (
            <li className="card">
                <p>{this.props.recipe}</p>
            </li>
        );
    }
}

Recipe.propTypes = {
    recipe: PropTypes.string,
};

export default Recipe;
