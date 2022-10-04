import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import postStore from "../../store/postStore";
import {observer} from "mobx-react-lite";

const PostList = observer(() => {
  // TODO: 1. posts, totalCount 모두 store로 옮기세요
  // TODO: 7. store로 옮긴 posts, totalCount(isMax를 이미 만들었다면 isMax), getInitialPosts, getPosts를 불러와 사용하세요
  const { posts, isMax, getInitialPosts, getPosts } = postStore;

  // TODO: 3-1. getInitialPosts를 store로 옮겨보세요

  useEffect(() => {
    getInitialPosts();
  }, [getInitialPosts]);

  const getMorePosts = () => {
    if (isMax) {
      alert('최대 20개만 불러올 수 있습니다.');
      return;
    }

    // TODO: 3-2. store의 getPosts 함수로 옮겨보세요
    getPosts();
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
});

export default PostList;
