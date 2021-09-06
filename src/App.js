import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  return (
    <Suspense fallback='loading...'>
      <Switch>
        {routes.map(({ component: Component, path, children, ...route }) => (
          <Route exact={!children?.length} path={path} key={path}>
            <Component routes={children} selfRoute={{ path, ...route }} />
          </Route>
        ))}
        {!!routes[0] && <Redirect to={routes[0].path} />}
      </Switch>
    </Suspense>
  );
}

export default App;
