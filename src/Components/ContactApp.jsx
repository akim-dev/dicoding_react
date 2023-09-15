import React from "react";

import ContactList from "./ContactList";

import { getData } from "../utils/data";

// export default function ContactApp() {
//   const contacts = getData();
//   //   {
//   //     console.log(contacts);
//   //   }
//   return (
//     <div className="contact-app">
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// }

// dengan class components
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  //   onDeleteHandler(id) {
  //     const contacts = this.state.contacts.filter((contact) => contact.id !== id);
  //     this.setState({
  //       contacts,
  //     });
  //   }
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  //   render() {
  //     const contacts = getData();
  //     return (
  //       <div className="contact-app">
  //         <h1>Daftar Kontak</h1>
  //         <ContactList contacts={contacts} />
  //       </div>
  //     );
  //   }
  // }
  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
