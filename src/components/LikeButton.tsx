import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant="secondary"
      className="like-btn"
      onClick={addLike}
      aria-label="Like this profile"
    >
      <span className="heart">{likes > 0 ? '💗' : '♡'}</span>
      <span className="count">{likes}</span>
    </Button>
  );
}

export default LikeButton;