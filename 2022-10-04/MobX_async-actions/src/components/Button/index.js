import { useHistory } from 'react-router-dom';
import { deletePostApi } from '../../api/postApi';
import usePage from '../../hooks/usePage';

const Button = ({ id, post, updatePost }) => {
  const history = useHistory();
  const currentPage = usePage();

  const editAction = (id) => {
    if (currentPage === 'detail') {
      history.push(`/edit/${id}`);
    } else if (currentPage === 'edit') {
      updatePost(id, post);
    }
  };

  const deletePost = (id) => {
    deletePostApi(id).then(() => {
      alert('삭제되었습니다.');
      history.push('/');
    });
  };

  return (
    <div className="action">
      <button className="button primary" onClick={() => editAction(id)}>
        {currentPage === 'edit' ? '수정' : '편집'}
      </button>
      {currentPage === 'edit' && (
        <button className="button warning" onClick={() => deletePost(id)}>
          삭제
        </button>
      )}
      <button className="button" onClick={() => history.push('/')}>
        목록으로
      </button>
    </div>
  );
};

export default Button;
