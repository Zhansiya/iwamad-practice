import { useState } from 'react';
import ContactItem from './ContactItem';

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

function ProfileCard({ name, bio, avatarUrl }: ProfileCardProps) {
    const [liked, setLiked] = useState(false);
    
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
    <main>
      <article className="card p-6 border border-red-200 rounded-xl mx-auto my-10 max-w-md w-full">
        <div className="prof-image">
          <img src={avatarUrl} width="150" height="150" alt="Profile Picture" className="avatar" />
          <h2>{name}</h2>
        </div>
        <div>
          <p className="welcome">{bio}</p>
        </div>
        <button id="likeButton"
                className="like-btn"
                onClick={() => setLiked(!liked)}
        >
            <span className="heart">{liked ? '❤️' : '🤍'}</span>
            <span id="likeCount" className="count">{liked ? 1 : 0}</span>
        </button>
        <h2>My Contacts</h2>
        <nav>
            <div className="links">
                {contacts.length === 0 ? (
                    <p>Пока нет контактов</p>
                ) : (
                    <ul>
                        {contacts.map(contact => (
                            <ContactItem key={contact.id} contact={contact} />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
      </article>
    </main>
  );
}

export default ProfileCard;