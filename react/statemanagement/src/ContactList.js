import React from "react";

const ContactList = ({contacts, toContact, onSelect}) => {
  console.log(contacts);
  return (
    <section className="contactList">
      <ul>
        {contacts &&
          contacts.length > 0 &&
          contacts.map((contact) => {
            return (<li key={contact.email}>
              <button
                onClick={() => {
                  onSelect(contact);
                }}
              >
                {contact.name}
              </button>
            </li>);
          })}
      </ul>
    </section>
  );
};

export default ContactList;
