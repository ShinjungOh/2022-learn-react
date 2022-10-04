import { makeAutoObservable } from 'mobx';
import { getPostApi, getPostsApi, putPostApi } from '../api/postApi';

class Post {
  /**
   * TODO: 1. state 옮기기, 초기값은 각 useState 안의 값을 적어주세요
   * posts: 전체 posts (PostList)
   * totalCount: 전체 posts의 개수 (PostList)
   * post: detail과 edit 페이지에서 불러올 하나의 post (PostDetail, PostEdit)
   */
  posts = null;
  totalCount = 0;
  post = null;

  constructor() {
    // TODO: 2. makeAutoObservable로 만들어보세요
    makeAutoObservable(this);
  }

  getInitialPosts = () => {
    // TODO: 3-1. 맨 처음 5개 posts를 가져오는 함수를 여기에 작성헤주세요
    /**
     * @example
       getPostsApi().then(({ data }) => {
        const fiveContents = data.filter((content) => content.id <= 5);
        this.totalCount = 5;
        this.posts = fiveContents;
       });
     */

    getPostsApi().then(({ data }) => {
      const fiveContents = data.filter((content) => content.id <= 5);
      this.totalCount = 5;
      this.posts = fiveContents;
    });
  };

  getPosts = () => {
    // TODO: 3-2. 전체 posts를 가져올 함수를 여기에 작성해주세요
    getPostsApi().then(({ data }) => {
      const fiveContents = data.filter((content) => content.id <= this.totalCount + 5);
      this.totalCount += 5;
      this.posts = fiveContents;
    });
  };

  getPost = (id) => {
    // TODO: 4. 하나의 post를 가져올 함수를 여기에 작성해주세요
      getPostApi(id).then(({ data }) => {
       this.post = data;
      });
  };

  changePost = (e) => {
    // TODO: 5. post를 수정할때 사용하는 함수를 여기에 작성해주세요
      const { name } = e.target;
      this.post = ({
          ...this.post,
          [name]: e.target.value,
      });
  };

  editPost = async (id, post) => {
    // TODO: 6. 수정한 post를 api로 요청보내는 함수를 여기에 작성해주세요
      await putPostApi(id, post)
          .then((data) => {
              this.post = data;
          });
  };

  get isMax() {
    // TODO: 8. this.totalCount가 20개인 경우 true를 return해주세요
      return this.totalCount === 20;
  }
}

const postStore = new Post();
export default postStore;
