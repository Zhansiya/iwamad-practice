import ContactItem from '../components/ContactItem';

export default function ContactPage() {
   type Contact = {
        id: number;
        label: string;
        url: string;
    };

     const contacts: Contact[] = [
        { id: 1, label: 'Email', url: 'mailto:zhansia.zheldibai@gmail.com' },
        { id: 2, label: 'GitHub', url: 'https://github.com/Zhansiya' },
    ];

  return (
     <main><h2>My Contacts</h2>
        <nav><div className="links">
                {contacts.length === 0 ? (
                    <p>Пока нет контактов</p>
                ) : (
                    <ul>
                        {contacts.map(contact => (
                            <ContactItem key={contact.id} contact={contact} />
                        ))}
                    </ul>
                )}
            </div></nav></main>
  );
}