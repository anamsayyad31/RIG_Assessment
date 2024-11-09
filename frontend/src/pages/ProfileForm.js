import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    dob: '',
    country_code: '',
    contact_number: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/submit', form);
      navigate('/profile', { state: { userProfile: response.data } });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Country Code:</label>
        <select name="country_code" value={form.country_code} onChange={handleChange} required>
          <option value="">Select Country Code</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          {/* Add more country codes as needed */}
        </select>
      </div>
      <div>
        <label>Contact Number:</label>
        <input type="text" name="contact_number" value={form.contact_number} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
