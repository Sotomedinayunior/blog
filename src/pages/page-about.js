import React from "react";
import Greeting from "../components/greeting";
import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Bienvenido a mi página sobre Gatsby.js</p>
            <Link to="/">Volver a la página principal</Link>
            <Greeting name="Generico" />
        </div>
    );
};

export default AboutPage;