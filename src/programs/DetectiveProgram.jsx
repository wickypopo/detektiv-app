import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DetectiveProgram() {
  /* PW ANIM */
  const [loginScreen, setLoginScreen] = useState(true);
  const [password, setPassword] = useState("*");
  useEffect(() => {
    const interval = setInterval(() => {
      setPassword((prev) => {
        if (prev.length > 5) {
          clearInterval(interval);
          return prev;
        }
        return prev + "*";
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  /* SUBMIT FORM */

  function submitForm(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <div className="flex flex-1 flex-col p-8">
        {loginScreen ? (
          <div className="flex flex-1 flex-col gap-2 items-center justify-center">
            <div className="material-in flex items-center justify-center py-4 w-80">
              <span className="text-4xl leading-none -mb-6">{password}</span>
            </div>
            <div className="flex w-80 justify-between">
              <span>Enter Password</span>
              <button
                onClick={() => setLoginScreen(false)}
                className="
                text-white 
                px-4
                primary-out
                active:primary-in"
              >
                Login
              </button>
            </div>
          </div>
        ) : null}
        {loginScreen ? null : (
          <form
            onSubmit={(e) => submitForm(e)}
            className="flex flex-1 flex-col gap-4"
          >
            <label className="flex flex-col gap-1">
              Label
              <input
                type="text"
                placeholder="Placeholder"
                className="flex-1 material-in pl-2 py-2 focus:outline-dashed focus:outline-2 focus:outline-dark focus:-outline-offset-6"
              />
            </label>
            <label className="flex flex-col gap-1">
              Label
              <input
                type="text"
                placeholder="Placeholder"
                className="flex-1 material-in pl-2 py-2 focus:outline-dashed focus:outline-2 focus:outline-dark focus:-outline-offset-6"
              />
            </label>{" "}
            <button
              type="text"
              placeholder="Label here"
              className="
                text-white 
                border-3 
                px-4
                py-2
                self-start
                primary-out
                active:primary-in"
            >
              Abschicken
            </button>
          </form>
        )}
      </div>
    </>
  );
}
