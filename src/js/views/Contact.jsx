import React from "react";
import { Link } from "react-router-dom";

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
            <div className="d-flex bd-highlight mb-3 border border-secondary">
                <div className="p-2 bd-highlight">
                    <img src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717718400&semt=sph" alt="perfil" />
                </div>
                <div className="ms-5 mt-5">
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div className="p-0 bd-highlight mt-3">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-map-marker-alt me-3 p-0"></i>
                            <h4> {address} </h4>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-phone me-3"></i>
                            <h4> {phone} </h4>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <i className="far fa-envelope me-3"></i>
                            <h4> {email} </h4>
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