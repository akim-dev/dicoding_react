import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div>
      <div className="contact-item__body">
        <h3 className="contact-item__title">{name}</h3>
        <p className="conact-item__username">@{tag}</p>
      </div>
    </div>
  );
}

export default ContactItemBody;
