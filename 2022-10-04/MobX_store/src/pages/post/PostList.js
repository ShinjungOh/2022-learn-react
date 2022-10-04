import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPostsApi } from '../../api/postApi';

const PostList = () => {
  // TODO: 1. posts, totalCount 모두 store로 옮기세요
  const [posts, setPosts] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  // TODO: 7. store로 옮긴 posts, totalCount(isMax를 이미 만들었다면 isMax), getInitialPosts, getPosts를 불러와 사용하세요

  // TODO: 3-1. getInitialPosts를 store로 옮겨보세요
  const getInitialPosts = () => {
    getPostsApi().then(({ data }) => {
      const fiveContents = data.filter((content) => content.id <= 5);
      setPosts(fiveContents);
      setTotalCount(5);
    });
  };

  useEffect(() => {
    getInitialPosts();
  }, []);

  const getMorePosts = () => {
    if (totalCount === 20) {
      alert('최대 20개만 불러올 수 있습니다.');
      return;
    }
    // TODO: 3-2. store의 getPosts 함수로 옮겨보세요
    getPostsApi().then(({ data }) => {
      const fiveContents = data.filter(
        (content) => content.id <= totalCount + 5
      );
      setTotalCount(totalCount + 5);
      setPosts(fiveContents);
    });
  };

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
};

export default PostList;
