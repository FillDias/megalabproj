
import { useState } from 'react';
import axios from 'axios';

export default function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: ''
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("will send post...");
      const response = await axios.post('http://localhost:5000/api/user', formData);
      console.log('User data saved:', response.data);
      // Optionally, you can redirect the user to a different page after successful submission
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input type="text" name="nickname" placeholder="Nickname" value={formData.nickname} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
