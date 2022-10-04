import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getPostApi, putPostApi } from '../../api/postApi';
import Button from '../../components/Button';

const PostEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  // TODO: 1. post를 store로 옮겨주세요
  const [post, setPost] = useState(null);
  // TODO: 7. store로 옮긴 post, getPost, changePost, editPost을 불러와서 사용하세요

  useEffect(() => {
    // TODO: 4. store의 getPost 함수로 옮겨보세요
    getPostApi(id).then(({ data }) => {
      setPost(data);
    });
  }, [id]);

  const changePost = (e) => {
    // TODO: 5. store의 changePost로 옮겨보세요
    const { name } = e.target;
    setPost({
      ...post,
      [name]: e.target.value,
    });
  };

  const updatePost = (id, post) => {
    // TODO: 6. 페이지 이동 부분은 제외하고 store의 editPost로 옮겨보세요
    putPostApi(id, post)
      .then((data) => {
        setPost(data);
      })
      .then(() => history.push(`/detail/${id}`));
  };

  return (
    <>
      {post ? (
        <div className="edit">
          <div>
            <span className="edit-title">제목:</span>
            <textarea
              className="edit-input"
              name="title"
              value={post.title}
              onChange={(e) => changePost(e)}
            />
          </div>
          <div>
            <span className="edit-title">내용:</span>
            <textarea
              className="edit-input edit-body"
              name="body"
              value={post.body}
              onChange={(e) => changePost(e)}
            />
          </div>

          <Button id={id} post={post} updatePost={updatePost} />
        </div>
      ) : (
        <div>불러오는 중...</div>
      )}
    </>
  );
};

export default PostEdit;
