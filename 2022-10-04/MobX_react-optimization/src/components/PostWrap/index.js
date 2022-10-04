import { Link } from 'react-router-dom';

const PostWrap = ({ id, title, body }) => {
  console.log('PostWrap render!');
  return (
    <div className="post-list">
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Link>
    </div>
  );
};

export default PostWrap;
