// import React from "react";

// function DeleteButton({ id, onDelete }) {
//   //   onDelete = (id) => {
//   //     console.log("saya sedang di klik");
//   //   };
//   return;
//   // <button className="contact-item__delete" onClick={() => onDelete(id)}>
//   <button className="contact-item__delete" onClick={() => onDelete(id)}>
//     X
//   </button>;
// }

// export default DeleteButton;

import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
