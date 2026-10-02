import { useLikes } from '../context/LikesContext';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button
      className="like-btn"
      onClick={addLike}
    >
      <span className="heart">{likes > 0 ? '❤️' : '🤍'}</span>
      <span className="count">{likes}</span>
    </button>
  );
}

export default LikeButton;