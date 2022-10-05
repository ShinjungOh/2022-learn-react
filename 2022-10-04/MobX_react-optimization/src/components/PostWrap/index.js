import { Link } from 'react-router-dom';
import {observer} from "mobx-react-lite";

const PostWrap = observer(({ post }) => {
  console.log('PostWrap render!');
  return (
    <div className="post-list">
      <Link to={`/detail/${post.id}`}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Link>
    </div>
  );
});

export default PostWrap;
