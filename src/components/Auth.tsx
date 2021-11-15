import { useDispatch } from "react-redux";
import { authActions, AppDispatch } from "../store/index";

const useAppDispatch = () => useDispatch<AppDispatch>();

const Auth = () => {
  const dispatch = useAppDispatch();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(authActions.login());
  };
  return (
    <form onSubmit={loginHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button>Login</button>
    </form>
  );
};

export default Auth;
