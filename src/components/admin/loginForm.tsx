function LoginForm() {
  return (
    <form
      // onSubmit={mutate}
      className="form "
    >
      <p className="form-title">Login as Administration</p>
      {/* {isPending && <h2 className="my-2 text-center text-sm font-semibold">Please Wait</h2>}
        {isError && (
          <h2 className="my-2 text-center text-sm font-semibold text-red-600">{error.message}</h2>
        )} */}
      <div className="input-container">
        <input type="email" name="email" placeholder="Enter email" required />
        <span></span>
      </div>
      <div className="input-container">
        <input type="password" name="password" placeholder="Enter password" required />
      </div>
      <button type="submit" className="submit disabled:opacity-40">
        {/* {isPending ? 'Proccssing' : 'Login'} */}
        Login
      </button>
    </form>
  );
}

export default LoginForm;
