import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store/index";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Todo from "./components/Todo";

import "./App.css";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const App = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Todo />
      <Counter />
    </div>
  );
};

export default App;
