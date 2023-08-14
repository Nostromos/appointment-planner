import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit} >
      <ContactPicker name="contact" value={contact} contacts={contactNames} onChange={(e) => setContact(e.target.value)} />
      <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input name="date" type="date" value={date} min={getTodayString()} onChange={(e) => setDate(e.target.value)} />
      <input name="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
