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
        const { name, value } = event.target;
        setContacto({
            ...contacto,
            [name]: value
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
            <div className="letrasCrearContacto1 d-flex justify-content-center">
                <p>Edit Contact</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        value={contacto.name}
                        onChange={handleChange}
                        className="form-control letrasCrearContacto3 input"
                        id="fullName"
                        placeholder='Nombre Completo'
                    />
                </div>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={contacto.email}
                        onChange={handleChange}
                        className="form-control letrasCrearContacto3 input"
                        id="email"
                        placeholder='Email'
                    />
                </div>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        type="text"
                        name="phone"
                        value={contacto.phone}
                        onChange={handleChange}
                        className="form-control letrasCrearContacto3 input"
                        id="phone"
                        placeholder='Teléfono'
                    />
                </div>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        type="text"
                        name="address"
                        value={contacto.address}
                        onChange={handleChange}
                        className="form-control letrasCrearContacto3 input"
                        id="address"
                        placeholder='Dirección'
                    />
                </div>
                <div className='d-flex justify-content-center m-5'>
                    <button type="submit" className="boton3 me-5">Save</button>
                    <Link to="/listContact"><button className="boton3 ms-5">Back to contacts</button></Link>
                </div>
            </form>
        </div>
    );
};
export default EditContact;
