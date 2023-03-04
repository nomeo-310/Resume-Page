import React from 'react';
import { useState } from 'react';
import './contact.scss'

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', subject: '', message: ''});

    const contactData = {
        phone: '+2347037575894',
        email: 'onomesalomi@gmail.com',
        location: '3 Ismaila Bello Street, Koya Estate, Igbolomu, Ikorodu.'
    };

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit =(event)=> {
        event.preventDefault();
        if (!formData.name) {
            setError(true);
            setMessage('Name is required!!');
        } else if (!formData.email) {
            setError(true);
            setMessage('Email is required!!');
        } else if (!formData.subject) {
            setError(true);
            setMessage('Subject is required!!');
        } else if (!formData.message) {
            setError(true);
            setMessage('Message section cannot be empty!!');
        } else {
            setError(false);
            setMessage('Your message has been sent!!!');
        }
    };

    const handleChange = (event) => {
        setFormData({...formData, [event.currentTarget.name]: event.currentTarget.value,})
    };

    const handleAlerts =()=> {
        if (error && message) {
            return <div className='alert alert-danger mt-4 rounded-pill'>{message}</div>
        } else if (!error && message) {
            return <div className='alert alert-success mt-4 rounded-pill'>{message}</div>
        } else {
            return null;
        }
    }
  return (
    <div className='contact row'>
      <div className='col-md-4 mb-4 mb-md-0'>
        <div className='contact-info mb-5'>
            <span className='mdi mdi-phone'></span>
            <div className='details'>
                <h5>Phone</h5>
                <span>{contactData.phone}</span>
            </div>
        </div>
        <div className='contact-info'>
            <span className='mdi mdi-email'></span>
            <div className='details'>
                <h5>Email Address</h5>
                <span>{contactData.email}</span>
            </div>
        </div>
        <div className='contact-info'>
            <span className='mdi mdi-map-marker'></span>
            <div className='details'>
                <h5>Location</h5>
                <span>{contactData.location}</span>
            </div>
        </div>
      </div>
      <div className='col-md-8'>
        <form className='contact-form' onSubmit={handleSubmit}>
            <div className='row'>
                <div className='column col-md-6'>
                    <div className='form-group'>
                        <input type="text" className='form-control' name='name' placeholder='Name' onChange={handleChange} value={formData.name}/>
                    </div>
                </div>
                <div className='column col-md-6'>
                    <div className='form-group'>
                        <input type="text" className='form-control' name='email' placeholder='Email' onChange={handleChange} value={formData.email}/>
                    </div>
                </div>
                <div className='column col-md-12'>
                    <div className='form-group'>
                        <input type="text" className='form-control' name='subject' placeholder='Subject' onChange={handleChange} value={formData.subject}/>
                    </div>
                </div>
                <div className='column col-md-12'>
                    <div className='form-group'>
                        <textarea type="text" className='form-control' name='message' placeholder='Message...' onChange={handleChange} value={formData.message} rows='5'></textarea>
                    </div>
                </div>
            </div>
            <button type="submit" name='submit' value='Submit' className='btn btn-default'><span className='mdi mdi-send'></span> Send Message</button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
