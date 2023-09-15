/* eslint-disable react/prop-types */
import React from "react";
import ContactItem from "../Components/ContactItem";

// export default function ContactList({ contacts, onDelete }) {
//   {
//     console.log(contacts);
//   }
//   return (
//     <div className="contact_list">
//       {contacts.map((contact) => (
//         <ContactItem
//           key={contact.id}
//           id={contact.id}
//           onDelete={onDelete}
//           {...contact}
//         />
//       ))}
//     </div>
//   );
// }

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
