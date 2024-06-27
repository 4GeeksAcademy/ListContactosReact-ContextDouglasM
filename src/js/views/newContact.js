import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewContact = () => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contacts, setContacts] = useState([]);
    

    const addContact = async () => {
        const body = {
            name: contactName,
            phone: contactPhone,
            email: contactEmail,
            address: contactAddress,
        };
    
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Douglas/contacts", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setContacts([...contacts, data]);
            clearForm();
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };
    

    return (
        
        <div className='ms-5 me-5'>
            <div className='letrasCrearContacto1 d-flex justify-content-center'>
                <p>Create Contact</p>
            </div>
            <form>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} className="form-control letrasCrearContacto3 input" id="fullName" placeholder='Full Name' />
                </div>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="form-control letrasCrearContacto3 input" id="email" placeholder='Enter Email' />
                </div>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="form-control letrasCrearContacto3 input" id="phone" placeholder='Enter Phone' />
                </div>
                <div className="mb-3 letrasCrearContacto2">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" value={contactAddress} onChange={(e) => setContactAddress(e.target.value)} className="form-control letrasCrearContacto3 input" id="address" placeholder='Enter Address' />
                </div>
                <div className='d-flex justify-content-center m-5'>
                    <button onClick={addContact} className="boton3 me-5">Save</button>
                    <Link to="/listContact"><button className="boton3 ms-5">Back to contacts</button></Link>
                </div>
                
            </form>
        </div>
    );
}

export default NewContact;









