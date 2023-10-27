export const ContactPicker = ({ name, value, contacts, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="" key="-1">--Please choose an option--</option>
      {contacts.map((contact, index) => (
        <option value={contact.name} key={index}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
