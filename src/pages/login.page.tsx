const LoginPage = () => {
  return (
    <div className="loginFormContainer">
      <h2>Log In</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Type your email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
