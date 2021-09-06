import { lazy } from 'react';

const Login = lazy(() => import('./view/Login'));
const CreateTransAction = lazy(() => import('./view/CreateTransaction'));
const List = lazy(() => import('./view/List'));

export const LOGIN = '/login';
export const CREATE_TRANSACTION = '/create';
export const LIST = '/list';

const routes = [
  {
    path: LOGIN,
    component: Login,
    name: 'Login',
  },
  {
    path: CREATE_TRANSACTION,
    component: CreateTransAction,
    name: 'CreateTransAction',
  },
  {
    path: LIST,
    component: List,
    name: 'List',
  },
];

export default routes;
