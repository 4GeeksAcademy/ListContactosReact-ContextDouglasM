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

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div>
            <div>
                {contacts.map(contact => {
                    return <Contact name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} />;
                })}
            </div>
            <Link to="/"> Regresa a la Pagina principal</Link>
        </div>

    );
};

export default ListContact;
