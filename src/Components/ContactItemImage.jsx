import React from "react";

export default function ContactItemImage({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}
