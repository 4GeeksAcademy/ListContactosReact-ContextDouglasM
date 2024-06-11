import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditContact = () => {
    const location = useLocation();
    console.log(useLocation())
    const navigate = useNavigate();
    const { id, name, address, phone, email } = location.state;

    const [contacto, setContacto] = useState({
        id,
        name,
        address,
        phone,
        email
    });

    const handleChange = (event) => {
        const { atributo, value } = event.target;
        setContacto({
            ...contacto,
            [atributo]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch(`https://playground.4geeks.com/contact/agendas/Douglas/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                },
                body: JSON.stringify(contacto),
            });
            navigate("/listContact");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='ms-5 me-5'>
            <div>
                <h1>Editar Contacto</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        value={contacto.name}
                        onChange={handleChange}
                        className="form-control"
                        id="fullName"
                        placeholder='Nombre Completo'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={contacto.email}
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        placeholder='Email'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        type="text"
                        name="phone"
                        value={contacto.phone}
                        onChange={handleChange}
                        className="form-control"
                        id="phone"
                        placeholder='Teléfono'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        type="text"
                        name="address"
                        value={contacto.address}
                        onChange={handleChange}
                        className="form-control"
                        id="address"
                        placeholder='Dirección'
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary w-100">Guardar</button>
                </div>
                <Link to="/">o volver a los contactos</Link>
            </form>
        </div>
    );
};

export default EditContact;
