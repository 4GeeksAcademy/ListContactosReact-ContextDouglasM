import React, { useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    useEffect(() => {
        const createAgenda = async () => {
            try {
                const response = await fetch('https://playground.4geeks.com/contact/agendas/Douglas', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                    },
                    body: JSON.stringify({}) 
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Agenda created:', data);
            } catch (error) {
                console.error('Error creating agenda:', error);
            }
        };

        createAgenda();
    }, []); 

    return (
        <div className="text-center">
            <div className="concept-five">
                <h1 className="word">
                    <span className="char">L</span>
                    <span className="char">I</span>
                    <span className="char">S</span>
                    <span className="char">T</span>
                    <span className="char">A</span>
                    <span className="char">&nbsp;</span>
                    <span className="char">D</span>
                    <span className="char">E</span>
                    <span className="char">&nbsp;</span>
                    <span className="char">C</span>
                    <span className="char">O</span>
                    <span className="char">N</span>
                    <span className="char">T</span>
                    <span className="char">A</span>
                    <span className="char">C</span>
                    <span className="char">T</span>
                    <span className="char">O</span>
                    <span className="char">S</span>
                </h1>
            </div>
            <div className="d-flex justify-content-center mt-5 botones">
                <div className="me-5 titulo">
                    <Link to="/listContact">
                        <button className="boton4"> Ver Contactos </button>
                    </Link>
                </div>
                <div className="ms-5 titulo">
                    <Link to="/newContact">
                        <button className="boton4"> Crear Contacto </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
