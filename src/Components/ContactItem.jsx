import React from "react";

import ContactItemBody from "../Components/ContactItemBody";
import ContactItemImage from "../Components/ContactItemImage";
import DeleteButton from "./DeleteButton";

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
