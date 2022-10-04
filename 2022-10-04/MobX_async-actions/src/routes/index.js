import { Switch, Route } from 'react-router-dom';

import PostList from '../pages/post/PostList';
import PostDetail from '../pages/post/PostDetail';
import PostEdit from '../pages/post/PostEdit';

const routesPath = [
  {
    path: '/',
    component: <PostList />,
  },
  { path: '/detail/:id', component: <PostDetail /> },
  { path: '/edit/:id', component: <PostEdit /> },
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
