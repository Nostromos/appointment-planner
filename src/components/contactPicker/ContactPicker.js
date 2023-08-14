import React from "react";

export const ContactPicker = ({ contacts, onChange, name, value }) => {
  return (
    <select onChange={onChange} value={value} name={name} >
      <option default value={""} key={-1}>No Contact Selected</option>
      {contacts?.map((contact, index) => {
          return <option key={index} value={contact}>{contact}</option>
        })
      }
    </select>
  );
};
