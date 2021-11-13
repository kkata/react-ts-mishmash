const Header = () => {
  const logoutHandler = () => {};
  return (
    <header>
      <h1>Redux Auth</h1>

      <nav>
        <ul>
          <li>
            <a href="/">Nav Item1</a>
          </li>
          <li>
            <a href="/">Nav Item2</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
