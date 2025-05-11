import React from "react";


const ContactIcon = ({ href, children }) => (

  <div>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </div>
);


export default ContactIcon;