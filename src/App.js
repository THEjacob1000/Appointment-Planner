import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from './components/root/Root';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const newContact = (name, phone, email) => {
    setContacts(prevContacts => [...prevContacts, { name, phone, email }]);
  };

  const newAppointment = (name, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, { name, contact, date, time }]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace /> } />
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} newContact={newContact} /> } />
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} newAppointment={newAppointment} /> } />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
