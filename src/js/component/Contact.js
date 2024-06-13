import React from "react";
import { Link } from "react-router-dom";
import "/workspaces/ListContactosReact-ContextDouglasM/src/styles/demo.css"

const Contact = ({ id, name, address, phone, email, onDelete }) => {
    const deleteContact = async () => {
        try {
            await fetch(`https://playground.4geeks.com/contact/agendas/Douglas/contacts/${id}`, {
                method: "DELETE",
                headers: {
                    "accept": "application/json",
                },
            });
            onDelete(id);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="bg-light m-4">
            <div className="d-flex bd-highlight mb-3 tarjetaContacto">
                <div>
                    <img src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717718400&semt=sph" alt="perfil" />
                </div>
                <div className="ms-5">
                    <div>
                        <p className="letrasContacto1">{name}</p>
                    </div>
                    <div className="bd-highlight">
                        <div className="d-flex align-items-center letrasContacto2">
                            <i className="fas fa-map-marker-alt me-3"></i>
                            <p> {address} </p>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center letrasContacto2">
                            <i className="fas fa-phone me-3"></i>
                            <p> {phone} </p>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center letrasContacto2">
                            <i className="far fa-envelope me-3"></i>
                            <p> {email} </p>
                        </div>
                    </div>
                </div>
                <div className="ms-auto p-2 bd-highlight d-flex justify-content-end p-0">
                    <Link to={`/editContact/${id}`} state={{ id, name, address, phone, email }}>
                        <i className="fas fa-pen m-5 me-3"></i>
                    </Link>
                    <i className="fas fa-trash-alt m-5" onClick={deleteContact}></i>
                </div>
            </div>
        </div>
    )
}

export default Contact;