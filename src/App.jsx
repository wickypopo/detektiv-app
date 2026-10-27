import { useEffect, useState } from "react";
import Button from "./components/Button";
import BottomBar from "./components/BottomBar";
import DesktopIcon from "./components/DesktopIcon";
import Modal from "./components/Modal";
import EmailProgram from "./programs/EmailProgram";
import InternetProgram from "./programs/InternetProgram";
import FolderProgram from "./programs/FolderProgram";
import ComputerProgram from "./programs/ComputerProgram";
import DetectiveProgram from "./programs/DetectiveProgram";
import MapsProgram from "./programs/MapsProgram";

const apps = [
  { label: "Folders", icon: "/icons/Folder.png", program: FolderProgram },
  { label: "Internet", icon: "/icons/Network.png", program: InternetProgram },
  {
    label: "E-Mail",
    icon: "/icons/Email.png",
    program: EmailProgram,
  },
  {
    label: "My Computer",
    icon: "/icons/My Computer.png",
    program: ComputerProgram,
  },
  {
    label: "Sherlock 95",
    icon: "/icons/Agent.png",
    program: DetectiveProgram,
  },
  {
    label: "Shell",
    icon: "/icons/Drive2.png",
    program: ComputerProgram,
  },
  {
    label: "Map",
    icon: "/icons/Earth (16 colors).png",
    program: MapsProgram,
  },
];

function App() {
  const [boot, setBoot] = useState(true);
  const [app, setApp] = useState(null);

  useEffect(() => {
    const audio = new Audio("/sounds/bootup.mp3");
    audio.play();
    setTimeout(() => {
      console.log("startup complete...");
      setBoot(false);
    }, 2000);
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col">
      {boot ? (
        <div className="absolute inset-0 z-90 pointer-none bg-black">
          <img
            src="/boot-screen.png"
            className="w-screen h-screen object-cover"
          />
        </div>
      ) : null}

      <section className="flex flex-1 flex-col gap-2 p-10">
        <Modal isAppSet={app ? true : false} setApp={setApp} app={app} />
        <div className="grid grid-cols-3 gap-12">
          {apps.map((app, index) => (
            <DesktopIcon
              key={index}
              onClick={() => setApp(app)}
              label={app.label}
              icon={app.icon}
            />
          ))}
        </div>
      </section>
      <BottomBar />
    </div>
  );
}

export default App;
