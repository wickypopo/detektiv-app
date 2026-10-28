import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tasks = [
  {
    id: 1,
    day: 1,
    title: "Open the mysterious email",
    question: "Who sent the mysterious email?",
    answer: "Hannah Metz",
    unlocked: true,
    solved: true,
  },
  {
    id: 2,
    day: 2,
    title: "Find the hidden password",
    question: "What password is hidden in the text file?",
    answer: "hunter2",
    unlocked: true,
    solved: true,
  },
  {
    id: 3,
    day: 3,
    title: "Inspect the strange image",
    question: "What object can be seen in the background of the image?",
    answer: "red car",
    unlocked: true,
    solved: false,
  },
  {
    id: 4,
    day: 4,
    title: "Decode the text file",
    question: "What word appears after decoding the message?",
    answer: "midnight",
    unlocked: true,
    solved: true,
  },
  {
    id: 5,
    day: 5,
    title: "Listen to the audio clue",
    question: "What number is spoken at the end of the recording?",
    answer: "47",
    unlocked: true,
    solved: false,
  },
  {
    id: 6,
    day: 6,
    title: "Find the suspicious folder",
    question: "Which folder contains the suspicious file?",
    answer: "Totally Not Secret",
    unlocked: true,
    solved: false,
  },
  {
    id: 7,
    day: 7,
    title: "Recover a deleted file",
    question: "What is the name of the deleted file?",
    answer: "meeting notes",
    unlocked: true,
    solved: true,
  },
  {
    id: 8,
    day: 8,
    title: "Identify the unknown user",
    question: "What username appears in the system log?",
    answer: "ghost87",
    unlocked: true,
    solved: false,
  },
  {
    id: 9,
    day: 9,
    title: "Read the system log",
    question: "At what time was the suspicious login recorded?",
    answer: "03:17",
    unlocked: true,
    solved: false,
  },
  {
    id: 10,
    day: 10,
    title: "Crack the archive password",
    question: "What is the password for the protected archive?",
    answer: "bluebird",
    unlocked: true,
    solved: true,
  },
  {
    id: 11,
    day: 11,
    title: "Trace the strange connection",
    question: "Which city does the connection point to?",
    answer: "Berlin",
    unlocked: true,
    solved: false,
  },
  {
    id: 12,
    day: 12,
    title: "Open the corrupted document",
    question: "What surname can still be read in the corrupted document?",
    answer: "Miller",
    unlocked: true,
    solved: false,
  },
  {
    id: 13,
    day: 13,
    title: "Find the missing attachment",
    question: "What is the filename of the missing attachment?",
    answer: "station.bmp",
    unlocked: false,
    solved: false,
  },
  {
    id: 14,
    day: 14,
    title: "Compare the suspect files",
    question: "Which suspect appears in both documents?",
    answer: "Daniel Reed",
    unlocked: false,
    solved: false,
  },
  {
    id: 15,
    day: 15,
    title: "Decode the strange symbols",
    question: "What word do the symbols spell?",
    answer: "basement",
    unlocked: false,
    solved: false,
  },
  {
    id: 16,
    day: 16,
    title: "Find the hidden executable",
    question: "What is the hidden program called?",
    answer: "watcher.exe",
    unlocked: false,
    solved: false,
  },
  {
    id: 17,
    day: 17,
    title: "Inspect the backup folder",
    question: "Which date appears on the oldest backup?",
    answer: "12/04/1997",
    unlocked: false,
    solved: false,
  },
  {
    id: 18,
    day: 18,
    title: "Recover the missing message",
    question: "Where does the recovered message say to meet?",
    answer: "Central Station",
    unlocked: false,
    solved: false,
  },
  {
    id: 19,
    day: 19,
    title: "Analyze the mystery photo",
    question: "What number is visible on the door?",
    answer: "214",
    unlocked: false,
    solved: false,
  },
  {
    id: 20,
    day: 20,
    title: "Find the hidden system note",
    question: "What code is written inside the system note?",
    answer: "RAVEN",
    unlocked: false,
    solved: false,
  },
  {
    id: 21,
    day: 21,
    title: "Identify the final suspect",
    question: "Who is the final suspect?",
    answer: "Daniel Reed",
    unlocked: false,
    solved: false,
  },
  {
    id: 22,
    day: 22,
    title: "Reconstruct the timeline",
    question: "At what time did the suspect leave the building?",
    answer: "22:45",
    unlocked: false,
    solved: false,
  },
  {
    id: 23,
    day: 23,
    title: "Unlock the final evidence",
    question: "What is the final evidence password?",
    answer: "blackbird",
    unlocked: false,
    solved: false,
  },
  {
    id: 24,
    day: 24,
    title: "Solve the case",
    question: "Who was responsible for everything?",
    answer: "Daniel Reed",
    unlocked: false,
    solved: false,
  },
];
export default function DetectiveProgram() {
  const [task, setTask] = useState(null);
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

  function submitForm(e, answer) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const userAnswer = form.get("userAnswer");
    console.log("submitted: " + answer + " User Answer: " + userAnswer);
    if (answer === userAnswer) {
      console.log("answer is correct!");
    } else {
      console.log("answer is not correct!");
    }
  }

  return (
    <>
      <div className="flex flex-1 flex-col p-6 relative">
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
        ) : task ? (
          <>
            <img
              src="\icons\small\Close.png"
              className="size-5 absolute top-2 right-2"
              onClick={() => setTask(null)}
            />
            <span className="text-3xl font-semibold">{task.title}</span>
            <span>{task.question}</span>
            <form
              onSubmit={(e) => submitForm(e, task.answer)}
              className="flex flex-1 flex-col gap-4"
            >
              <label className="flex gap-2 items-center">
                Label
                <input
                  name="userAnswer"
                  type="text"
                  placeholder="Placeholder"
                  className="flex-1 material-in pl-2 py-2 focus:outline-2 focus:outline-dark"
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
          </>
        ) : (
          <div className="flex flex-col">
            {tasks.map((task) => (
              <div key={task.id} className="flex flex-col mb-1">
                {task.unlocked ? (
                  <button
                    onClick={() => setTask(task)}
                    className="material-out active:material-in flex flex-1 py-2 px-2 justify-between"
                  >
                    <span>{task.title}</span>
                    {task.solved ? (
                      <span className="text-green-600">solved ✔</span>
                    ) : null}
                  </button>
                ) : (
                  <button className="material-out flex flex-1 py-2 px-2 gap-2 justify-center">
                    <span>locked </span>
                    <img src="/icons/Document Locked.png" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
/*
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
*/
