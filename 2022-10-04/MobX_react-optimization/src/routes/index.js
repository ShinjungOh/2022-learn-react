import { Switch, Route } from 'react-router-dom';

import PostList from '../pages/post/PostList';
import PostDetail from '../pages/post/PostDetail';
import PostEdit from '../pages/post/PostEdit';
import About from '../pages/info/About';

const routesPath = [
  {
    path: '/',
    component: <PostList />,
  },
  { path: '/detail/:id', component: <PostDetail /> },
  { path: '/edit/:id', component: <PostEdit /> },
  { path: '/info', component: <About />, exact: true },
];

export const Router = () => {
  return (
    <Switch>
      {routesPath.map(({ path, component, exact = true }) => (
        <Route key={path} path={path} exact={exact}>
          {component}
        </Route>
      ))}
    </Switch>
  );
};
