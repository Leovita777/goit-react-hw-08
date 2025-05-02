import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contactsToDisplay = useSelector(selectFilteredContacts);

  return (
    <div>
      {contactsToDisplay && contactsToDisplay.length > 0 ? (
        <ul className={css.contactList}>
          {contactsToDisplay.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts yet</p>
      )}
    </div>
  );
};

export default ContactList;
