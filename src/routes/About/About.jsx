import './About.css';
import React from "react";
import {NavLink} from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <>
                <p>Инфромация о проекте</p>
                <button><NavLink to="/recepies">Понятно</NavLink></button>
            </>
        );
    }
}

export default About;
