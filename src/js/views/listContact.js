import React, { useEffect, useState } from "react";
import Contact from "../component/Contact.js";
import { Link } from "react-router-dom";

const ListContact = () => {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Douglas", {
                method: "GET",
                headers: {
                    "accept": "application/json",
                },
            });
            const data = await response.json();
            // Verifica si data.contacts es un array antes de establecer el estado
            setContacts(Array.isArray(data.contacts) ? data.contacts : []);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div>
            <div>
                {contacts.map(contact => (
                    <Contact 
                        key={contact.id} 
                        id={contact.id} 
                        name={contact.name} 
                        address={contact.address} 
                        phone={contact.phone} 
                        email={contact.email} 
                        onDelete={deleteContact} 
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="boton2"> Regresar a Lista de Contactos </button></Link>
            </div>
        </div>
    );
};

export default ListContact;
