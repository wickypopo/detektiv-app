import { useState } from "react";
import BottomBar from "../components/BottomBar";

function Login({ auth, setAuth }) {
  const [loginFailed, setLoginFailed] = useState(false);

  function checkLogin(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const password = form.get("password");

    if (username === "detektiv" && password === "123") {
      console.log("authenticated!");
      setAuth(true);
      localStorage.setItem("authenticated", true);
    } else {
      setLoginFailed(true);
      console.log("wrong password!");
    }
  }
  return (
    <div className="flex h-screen w-screen flex-col">
      <section className="flex flex-1 flex-col gap-2 p-10 justify-center">
        <div className="material-out flex flex-col p-2 z-10">
          <div className="flex bg-primary px-2 py-2 gap-2 justify-between">
            <span className="text-white text-2xl leading-none mt-1">
              Welcome to Windows
            </span>
            <div className="flex gap-1">
              <img
                src="/icons/small/Minimize.png"
                className="material-out active:material-in size-8 p-2"
              />{" "}
              <img
                src="/icons/small/Maximise.png"
                className="material-out active:material-in size-8 p-2"
              />{" "}
              <img
                src="/icons/small/Close.png"
                className="material-out active:material-in size-8 p-2"
              />
            </div>
          </div>
          <form
            onSubmit={(e) => checkLogin(e)}
            className="flex flex-col items-center justify-center gap-4 py-6"
          >
            <span>Type a user name and password to log on to Windows</span>
            <div>
              <div className="flex flex-col items-end gap-2">
                <label className="flex gap-2 items-center">
                  User name
                  <input
                    name="username"
                    className="material-in bg-white p-1 pt-2 pl-2 outline-none"
                  />
                </label>
                <label className="flex gap-2 items-center">
                  Password
                  <input
                    name="password"
                    type="password"
                    className="material-in bg-white p-1 pt-2 pl-2 outline-none"
                  />
                </label>
              </div>
            </div>
            {loginFailed ? (
              <span className="text-red-500">
                Wrong password! Please try again!
              </span>
            ) : null}

            <div className="flex gap-2">
              <button className="material-out px-18 py-2 border-2 active:material-in">
                OK
              </button>
              <button className="material-out px-18 py-2 active:material-in">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
