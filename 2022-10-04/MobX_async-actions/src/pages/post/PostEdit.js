import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Button from '../../components/Button';
import postStore from '../../store/postStore';

const PostEdit = observer(() => {
  const history = useHistory();
  const { id } = useParams();

  const { post, getPost, changePost, editPost } = postStore;

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  const updatePost = (id) => {
    editPost(id, post).then(() => history.push(`/detail/${id}`));
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
});

export default PostEdit;
