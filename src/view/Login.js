import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Styles.module.scss';

const dataInitialValues = { login: '', password: '' };

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState(dataInitialValues);

  const loginHandler = () => {
    if (data.login === 'test' && data.password === 'test') {
      history.push('/list');
    } else {
      setData(dataInitialValues);
    }
  };
  return (
    <div className={classes.authContainer}>
      <div className={classes.authBlock}>
        <h4>Login</h4>
        <input
          className={classes.authInput}
          placeholder='login'
          value={data.login}
          onChange={(e) =>
            setData((prev) => ({ ...prev, login: e.target.value }))
          }
        />
        <input
          className={classes.authInput}
          placeholder='password'
          type='password'
          value={data.password}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <div className={classes.authButtonWrapper}>
          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
