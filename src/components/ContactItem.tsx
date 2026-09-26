type Contact = {
  id: number;
  label: string;
  url: string;
};

type ContactItemProps = {
  contact: Contact;
};

function ContactItem({ contact }: ContactItemProps) {
  return (
    <li>
      {contact.label}: <a href={contact.url} target="_blank">{contact.url.replace('https://', '')}</a>
    </li>
  );
}

export default ContactItem;