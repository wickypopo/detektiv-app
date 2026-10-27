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
      <div className="flex flex-1 flex-col">
        {loginScreen ? (
          <div className="flex flex-1 flex-col gap-2 items-center justify-center">
            <div className="material-out flex items-center justify-center py-4 w-80">
              <span className="text-4xl leading-none -mb-6">{password}</span>
            </div>
            <div className="flex w-80 justify-between">
              <span>Enter Password</span>
              <button
                onClick={() => setLoginScreen(false)}
                className="
                bg-primary 
                text-white 
                border-3 px-4
                border-t-[#757FF0] 
                border-l-[#757FF0] 
                border-b-[#03052E] 
                border-r-[#03052E]
                active:border-t-[#03052E] 
                active:border-l-[#03052E] 
                active:border-b-[#757FF0] 
                active:border-r-[#757FF0]"
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
                className="flex-1 material-in pl-2 py-2"
              />
            </label>
            <label className="flex flex-col gap-1">
              Label
              <input
                type="text"
                placeholder="Placeholder"
                className="flex-1 material-in pl-2 py-2"
              />
            </label>{" "}
            <button
              type="text"
              placeholder="Label here"
              className="
                bg-primary 
                text-white 
                border-3 px-4
                border-t-[#757FF0] 
                border-l-[#757FF0] 
                border-b-[#03052E] 
                border-r-[#03052E]
                active:border-t-[#03052E] 
                active:border-l-[#03052E] 
                active:border-b-[#757FF0] 
                active:border-r-[#757FF0]"
            >
              Abschicken
            </button>
          </form>
        )}
      </div>
    </>
  );
}
