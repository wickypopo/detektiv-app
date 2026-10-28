import { useState } from "react";
import Desktop from "./screens/Desktop";
import Login from "./screens/Login";

function App() {
  const [auth, setAuth] = useState(() => {
    return localStorage.getItem("authenticated") === "true";
  });

  if (auth) {
    console.log("authenticated!");
  } else {
    console.log("wrong password!");
  }
  return <>{auth ? <Desktop /> : <Login auth={auth} setAuth={setAuth} />}</>;
}

export default App;
