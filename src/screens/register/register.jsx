/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import useStore from '../../store/useStore';
import './register.scss';

export default function AddUser() {
  const createUser = useStore((s) => s.userSlice.createUser);
  const [form, setForm] = useState({
    name: '',
    year: '',
    dev: false,
    des: false,
    pm: false,
    core: false,
    mentor: false,
    major: '',
    minor: '',
    birthday: '',
    home: '',
    quote: '',
    favoriteThingOne: '',
    favoriteThingTwo: '',
    favoriteThingThree: '',
    favoriteDartmouthTradition: '',
    funFact: '',
    profilePic: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['dev', 'des', 'pm', 'mentor', 'core'].includes(name)) {
      setForm({
        ...form,
        [name]: value === 'true',
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...form,
    };
    try {
      const res = await axios.get(`/api/users?name=${form.name}`);
      if (!res.data.user === null) {
        alert('A user with this name already exists. Please choose a different name.');
      } else {
        await createUser(newUser);
        setForm({
          name: '',
          year: '',
          dev: false,
          des: false,
          pm: false,
          core: false,
          mentor: false,
          major: '',
          minor: '',
          birthday: '',
          home: '',
          quote: '',
          favoriteThingOne: '',
          favoriteThingTwo: '',
          favoriteThingThree: '',
          favoriteDartmouthTradition: '',
          funFact: '',
          profilePic: '',
        });
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div className="addUser">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="addUserForm">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Graduation Year"
          required
        />
        <label htmlFor="dev">Developer:</label>
        <select id="dev" name="dev" value={form.dev} onChange={handleChange}>
          <option value="true">yes? maybe? perchance?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label htmlFor="des">Designer:</label>
        <select id="des" name="des" value={form.des} onChange={handleChange}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label htmlFor="pm">Product Manager:</label>
        <select id="pm" name="pm" value={form.pm} onChange={handleChange}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label htmlFor="mentor">Mentor:</label>
        <select id="mentor" name="mentor" value={form.mentor} onChange={handleChange}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label htmlFor="core">Core:</label>
        <select id="core" name="core" value={form.core} onChange={handleChange}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          name="major"
          value={form.major}
          onChange={handleChange}
          placeholder="Major"
        />
        <input
          name="minor"
          value={form.minor}
          onChange={handleChange}
          placeholder="Minor"
        />
        <input
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          placeholder="Birthday"
          required
        />
        <input
          name="home"
          value={form.home}
          onChange={handleChange}
          placeholder="Home"
          required
        />
        <input
          name="quote"
          value={form.quote}
          onChange={handleChange}
          placeholder="Favorite Quote"
          required
        />
        <input
          name="favoriteThingOne"
          value={form.favoriteThingOne}
          onChange={handleChange}
          placeholder="Favorite Thing One"
        />
        <input
          name="favoriteThingTwo"
          value={form.favoriteThingTwo}
          onChange={handleChange}
          placeholder="Favorite Thing Two"
        />
        <input
          name="favoriteThingThree"
          value={form.favoriteThingThree}
          onChange={handleChange}
          placeholder="Favorite Thing Three"
        />
        <input
          name="favoriteDartmouthTradition"
          value={form.favoriteDartmouthTradition}
          onChange={handleChange}
          placeholder="Favorite Dartmouth Tradition"
        />
        <input
          name="funFact"
          value={form.funFact}
          onChange={handleChange}
          placeholder="Fun Fact"
        />
        <input
          name="profilePic"
          value={form.profilePic}
          onChange={handleChange}
          placeholder="Profile Picture URL"
        />
        <button type="submit" className="submit">Add User</button>
      </form>
    </div>
  );
}
