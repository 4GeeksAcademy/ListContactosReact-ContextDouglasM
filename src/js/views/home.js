import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5 FondoHome">
		<h1> Lista de Contactos </h1>
		<div>
			<div> <Link to="/listContact"> Ver Contactos</Link> </div>
			<div> <Link to="/newContact"> Crear Contacto </Link> </div>
		</div>
	</div>
);
