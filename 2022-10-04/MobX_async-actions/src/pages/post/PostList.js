import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import postStore1 from '../../store/postStore';

const PostList = observer(() => {
  const { getInitialPosts, posts, getPosts, isMax } = postStore1;

  const getMorePosts = () => {
    if (isMax) {
      alert('최대 20개만 불러올 수 있습니다.');
      return;
    } else {
      // TODO: 3. getPostFlow 함수를 가져오세요
      getPosts();
    }
  };

  useEffect(() => {
    getInitialPosts();
  }, [getInitialPosts]);

  return (
    <>
      {posts ? (
        <>
          {posts?.map((post) => (
            <div key={post.id} className="post-list">
              <Link to={`/detail/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            </div>
          ))}
          <div className="more-post-div">
            <button className="more-post" onClick={() => getMorePosts()}>
              +
            </button>
          </div>
        </>
      ) : (
        <div>불러오는 중...</div>
      )}
    </>
  );
});

export default PostList;
