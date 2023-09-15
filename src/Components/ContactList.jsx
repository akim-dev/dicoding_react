/* eslint-disable react/prop-types */
import React from "react";
import ContactItem from "../Components/ContactItem";

export default function ContactList({ contacts }) {
  {
    console.log(contacts);
  }
  return (
    <div className="contact_list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
