import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import postStore from '../../store/postStore';

import PostWrap from '../../components/PostWrap';

const PostList = observer(() => {
  const { getInitialPosts, posts, isMax, getPosts } = postStore;

  const getMorePosts = () => {
    if (isMax) {
      alert('최대 20개만 불러올 수 있습니다.');
      return;
    } else {
      getPosts();
    }
  };

  useEffect(() => {
    getInitialPosts();
  }, [getInitialPosts]);

  console.log('PostList render!');

  return (
    <>
      {posts ? (
        <>
          <div
            className="subtitle"
            onClick={action(() => {
              posts[0].title = 'React 최적화 - 테스트';
            })}
          >
            <strong>클릭해서 'posts[0].title' 변경하기</strong>
          </div>
          {/* TODO: 1. id, title, body가 아니라 post 자체를 넘겨주세요 */}
          {/* TODO: 2. key는 index가 아닌 값으로 바꾸어주세요 */}
          {posts?.map((post, index) => (
            <PostWrap
              id={post.id}
              title={post.title}
              body={post.body}
              key={index}
            />
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
