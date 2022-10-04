import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostApi } from '../../api/postApi';
import Button from '../../components/Button';

const PostDetail = () => {
  const { id } = useParams();

  // TODO: 1. post를 store로 옮겨주세요
  const [post, setPost] = useState(null);
  // TODO: 7. store로 옮긴 것을 불러와서 사용하세요

  useEffect(() => {
    // TODO: 4. store의 getPost 함수로 옮겨보세요
    getPostApi(id).then(({ data }) => {
      setPost(data);
    });
  }, [id]);

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
};

export default PostDetail;
