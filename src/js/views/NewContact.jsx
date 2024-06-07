import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
            const data = await response.json();
            setContacts([...contacts, data]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='ms-5 me-5'>
            <div>
                <h1>Contact</h1>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} className="form-control" id="fullName" placeholder='Full Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="form-control" id="email" placeholder='Enter Email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="form-control" id="phone" placeholder='Enter Phone' />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" value={contactAddress} onChange={(e) => setContactAddress(e.target.value)} className="form-control" id="address" placeholder='Enter Address' />
                </div>
                <div>
                    <button onClick={addContact} className="btn btn-primary w-100">Save</button>
                </div>
                <Link to="/">or get back to contacts</Link>
            </form>
        </div>
    );
}

export default Contact;









