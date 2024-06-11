import React, { useEffect, useState } from "react";
import Contact from "./Contact.jsx";
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
            })
            const data = await response.json();
            setContacts(data.contacts);
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
                {contacts.map(contact => {
                    return <Contact key={contact.id} id={contact.id} name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} onDelete={deleteContact} />;
                })}
            </div>
            <Link to="/"> Regresa a la Pagina principal</Link>
        </div>
    );
};

export default ListContact;

