import LikeButton from './LikeButton';
import Card from './ui/Card';

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

function ProfileCard({ name, bio, avatarUrl }: ProfileCardProps) {
  return (
    <main>
      <Card>
        <div className="prof-image">
          <img
            src={avatarUrl}
            width="150"
            height="150"
            alt={`Profile photo of ${name}`}
          />
          <h2>{name}</h2>
        </div>

        <div>
          <p className="welcome">{bio}</p>
        </div>

        <LikeButton />
      </Card>
    </main>
  );
}

export default ProfileCard;