import { action, makeAutoObservable, runInAction } from 'mobx';
import { getPostsApi, getPostApi, putPostApi } from '../api/postApi';

class Post {
  posts = null;
  post = null;
  totalCount = 0;

  constructor() {
    // TODO: 3. 세번째 인자에 {autoBind: true}를 이용해 자동으로 this를 바인딩 해줍니다
    makeAutoObservable(this, {}, {autoBind: true});
  }

  getInitialPosts = () => {
    getPostsApi().then(
        // TODO: 1. action으로 감싸주세요
        action(({ data }) => {
          const fiveContents = data.filter((content) => content.id <= 5);
          this.posts = fiveContents;
          this.totalCount = 5;
        })
    );
  };

  getPosts = async () => {
    // getPostsApi().then(
    //   // TODO: 1. action으로 감싸주세요
    //   action (({ data }) => {
    //     const fiveContents = data.filter(
    //       (content) => content.id <= this.totalCount + 5
    //     );
    //     this.totalCount += 5;
    //     this.posts = fiveContents;
    //   }
    // ));

    // TODO: 2. 위 1번을 주석하고, runInAction(async/await)으로 만들어보세요
    const {data} = await getPostsApi()
    const fiveContents = data.filter(
        (content) => content.id <= this.totalCount + 5
    );
    runInAction(() => {
      this.totalCount += 5;
      this.posts = fiveContents;
    });
  };

  // TODO: 3. 위 getPosts 함수를 flow(제너레이터 함수)로 만들어보세요
  *getPostFlow() {
    // 2번의 await 자리에 yield를 넣어 getPostApi()를 호출합니다.
    const {data} = yield getPostsApi();
    const fiveContents = data.filter(
        (content) => content.id <= this.totalCount + 5
    );
    this.totalCount += 5;
    this.posts = fiveContents;
  }

  getPost = (id) => {
    getPostApi(id).then(
        // TODO: 1. action으로 감싸주세요
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
        // TODO: 1. action으로 감싸주세요
        action((data) => {
          this.post = data;
        })
    );
  };

  get isMax() {
    return this.totalCount === 20;
  }
}

const postStore1 = new Post();
export default postStore1;
