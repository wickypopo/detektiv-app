import { useState } from "react";
import DesktopIcon from "../components/DesktopIcon";
import ReactMarkdown from "react-markdown";

const folders = [
  {
    id: 1,
    name: "Totally Not Secret",
    icon: "/icons/Folder.png",
    files: [
      {
        id: 101,
        name: "Nothing To See Here.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "Seriously. There is nothing here.",
      },
      {
        id: 102,
        name: "Passwords Final.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "admin123\n\npassword\n\nhunter2",
      },
      {
        id: 103,
        name: "Definitely Not Evidence.bmp",
        type: "img",
        icon: "/icons/Painting.png",
        src: "/files/evidence.bmp",
      },
    ],
  },

  {
    id: 2,
    name: "Homework",
    icon: "/icons/Folder.png",
    files: [
      {
        id: 201,
        name: "Math Homework.doc",
        type: "doc",
        icon: "/icons/WordPad document.png",
      },
      {
        id: 202,
        name: "Tax Fraud.xls",
        type: "xls",
        icon: "/icons/Sheet with cubes.png",
      },
      {
        id: 203,
        name: "Do Not Open.exe",
        type: "exe",
        icon: "/icons/Program.png",
      },
    ],
  },

  {
    id: 3,
    name: "Important Stuff",
    icon: "/icons/Folder.png",
    files: [
      {
        id: 301,
        name: "Shopping List.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "Milk\nBread\nCoffee\nSomething important",
      },
      {
        id: 302,
        name: "Meeting Notes.doc",
        type: "doc",
        icon: "/icons/WordPad document.png",
      },
      {
        id: 303,
        name: "Very Important.bmp",
        type: "img",
        icon: "/icons/Painting.png",
      },
    ],
  },

  {
    id: 4,
    name: "Evidence",
    icon: "/icons/Folder.png",
    files: [
      {
        id: 401,
        name: "Suspect 01.bmp",
        type: "img",
        icon: "/icons/Painting.png",
        src: "/files/suspect01.bmp",
      },
      {
        id: 402,
        name: "Mysterious Noise.wav",
        type: "audio",
        icon: "/icons/Volume Wave.png",
        src: "/files/mysterious-noise.wav",
      },
      {
        id: 403,
        name: "Clue.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "The password is NOT 'password'. Probably.",
      },
    ],
  },

  {
    id: 5,
    name: "Games",
    icon: "/icons/Program Folder (16x16px & 32x32px).png",
    files: [
      {
        id: 501,
        name: "DOOM.exe",
        type: "exe",
        icon: "/icons/MS-DOS logo.png",
      },
      {
        id: 502,
        name: "Minesweeper Cheats.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "Step 1: Don't click the mines.",
      },
      {
        id: 503,
        name: "Cool Game.exe",
        type: "exe",
        icon: "/icons/Program.png",
      },
    ],
  },

  {
    id: 6,
    name: "System Files",
    icon: "/icons/Controls Folder.png",
    files: [
      {
        id: 601,
        name: "Computer Brain.dll",
        type: "dll",
        icon: "/icons/Generic.png",
      },
      {
        id: 602,
        name: "Internet.exe",
        type: "exe",
        icon: "/icons/Earth (16 colors).png",
      },
      {
        id: 603,
        name: "Do Not Delete.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "Please don't delete me.",
      },
    ],
  },

  {
    id: 7,
    name: "Dad's Documents",
    icon: "/icons/Documents Folder.png",
    files: [
      {
        id: 701,
        name: "Car Prices 1997.xls",
        type: "xls",
        icon: "/icons/Sheet with cubes.png",
      },
      {
        id: 702,
        name: "How To Use Internet.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "1. Connect modem\n2. Open Internet\n3. Wait",
      },
      {
        id: 703,
        name: "Cool Guitar Song.wav",
        type: "audio",
        icon: "/icons/Music sheet (purple).png",
        src: "/files/cool-guitar-song.wav",
      },
    ],
  },

  {
    id: 8,
    name: "New Folder (12)",
    icon: "/icons/New folder.png",
    files: [
      {
        id: 801,
        name: "New Text Document.txt",
        type: "txt",
        icon: "/icons/Notepad document.png",
        content: "asdfasdfasdf",
      },
      {
        id: 802,
        name: "Untitled.bmp",
        type: "img",
        icon: "/icons/Painting.png",
      },
      {
        id: 803,
        name: "Final Version.doc",
        type: "doc",
        icon: "/icons/WordPad document.png",
      },
    ],
  },
];

export default function FolderProgram() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [folder, setFolder] = useState(null);
  const [file, setFile] = useState(null);
  console.log(breadcrumbs);
  return (
    <>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex gap-2 items-center mb-6 text-base">
          <button
            onClick={() => {
              setFile(null);
              setFolder(null);
            }}
            className="flex gap-2"
          >
            Folders
            <p className="text-sm">{">"}</p>
          </button>

          {folder ? (
            <button
              onClick={() => {
                setFile(null);
              }}
              className="flex gap-2"
            >
              {folder?.name}
              <p className="text-sm">{">"}</p>
            </button>
          ) : null}
          {file?.name ? (
            <button className="flex gap-2">
              {file?.name}
              <p className="text-sm">{">"}</p>
            </button>
          ) : null}
        </div>
        {/* Folder view */}
        {folder ? null : (
          <div className="grid grid-cols-3 gap-6 place-items-center">
            {folders.map((folder) => (
              <DesktopIcon
                key={folder.id}
                icon={folder.icon}
                label={folder.name}
                light={false}
                onClick={() => {
                  setFolder(folder);
                  setBreadcrumbs((prev) => [...prev, folder.name]);
                }}
              />
            ))}
          </div>
        )}
        {/* File view */}
        {folder && !file && (
          <div className="grid grid-cols-3 gap-6 place-items-center">
            {folder.files.map((file) => (
              <DesktopIcon
                key={file.id}
                label={file.name}
                icon={file.icon}
                light={false}
                onClick={() => {
                  setFile(file);
                  setBreadcrumbs((prev) => [...prev, file.name]);
                }}
              />
            ))}
          </div>
        )}
        {/* in File view */}
        {file ? (
          <div className="flex flex-col">
            <span className="text-3xl font-semibold leading-none -mt-5 mb-2">
              {file.name}
            </span>
            <ReactMarkdown>{file.content}</ReactMarkdown>
          </div>
        ) : null}
      </div>
    </>
  );
}
