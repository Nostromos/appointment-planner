import React, { useState, useCallback } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const defaultContacts = [
    {
      name: 'Michael',
      phone: '9876543321',
      email: 'me@rest.test',
    },
    {
      name: 'Tif',
      phone: '1234567890',
      email: 'tif@test.test'
    },
  ];

  const defaultAppointments = [
    {
      title: "30 min meeting",
      contact: "Michael",
      date: "2023-08-14",
      time: "10:05"
    },
  ];

  const [contacts, setContacts] = useState(defaultContacts);
  const [appointments, setAppointments] = useState(defaultAppointments);

  const addContact = useCallback((name, phone, email) => {
    setContacts([...contacts, { name: name, phone: phone, email: email }]);
  }, [contacts]);

  const addAppointment = useCallback((title, contact, date, time) => {
    setAppointments([...appointments, { title: title, contact: contact, date: date, time: time }]);
  }, [appointments]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={<ContactsPage addContact={addContact} contacts={contacts} />}/>
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage addAppointment={addAppointment} contacts={contacts} appointments={appointments} />}/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
