import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Button from '../../components/Button';
import postStore from '../../store/postStore';

const PostDetail = observer(() => {
  const { id } = useParams();
  const { post, getPost } = postStore;

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return (
    <>
      {post ? (
        <>
          <div className="post-detail">
            <h3 className="detail-title">{post.title}</h3>
            <div className="detail-body">{post.body}</div>
          </div>
          <Button id={id} />
        </>
      ) : (
        <div>불러오는 중...</div>
      )}
    </>
  );
});

export default PostDetail;
