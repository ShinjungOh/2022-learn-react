import { action, makeAutoObservable, runInAction } from 'mobx';
import { getPostsApi, getPostApi, putPostApi } from '../api/postApi';

class Post {
  posts = null;
  post = null;
  totalCount = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getInitialPosts = () => {
    getPostsApi().then(
      action(({ data }) => {
        const fiveContents = data.filter((content) => content.id <= 5);
        this.posts = fiveContents;
        this.totalCount = 5;
      })
    );
  };

  getPosts = async () => {
    const { data } = await getPostsApi();
    const fiveContents = data.filter(
      (content) => content.id <= this.totalCount + 5
    );
    runInAction(() => {
      this.posts = fiveContents;
      this.totalCount += 5;
    });
  };

  *getPostsFlow() {
    const result = yield getPostsApi();
    const fiveContents = result.data.filter(
      (content) => content.id <= this.totalCount + 5
    );
    this.posts = fiveContents;
    this.totalCount += 5;
  }

  getPost = (id) => {
    getPostApi(id).then(
      action(({ data }) => {
        this.post = data;
      })
    );
  };

  changePost = (e) => {
    const { name } = e.target;
    this.post = {
      ...this.post,
      [name]: e.target.value,
    };
  };

  editPost = async (id, post) => {
    await putPostApi(id, post).then(
      action((data) => {
        this.post = data;
      })
    );
  };

  get isMax() {
    return this.totalCount === 20;
  }
}

const postStore = new Post();
export default postStore;
