import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:<input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}} /></label>
      <label htmlFor="phone">Phone:<input type="tel" name="phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} /></label>
      <label htmlFor="email">Email:<input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} /></label>
      <input type="submit" value="Add Contact"></input>
    </form>
  );
};

