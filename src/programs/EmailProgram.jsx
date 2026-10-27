import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Win95Audio from "../components/Audio";

const emails = [
  {
    id: "mail-1",
    subject: "Dringende Anfrage!!!",
    sender: "unbekannt@example.com",
    date: "26.10.2026",
    body: `Hallo Felix,

ich wollte dir ein kurzes **Update zum aktuellen Stand** geben.

Die wichtigsten Punkte sind:

- Das Grundgerüst steht
- Die wichtigsten Funktionen laufen
- Das Design ist fast fertig
- Ein paar kleinere Bugs sind noch offen

Wenn du noch Feedback hast, schick es mir gerne einfach rüber.

Beste Grüße  
Hannah`,
    read: false,
    attachments: [
      { type: "img", src: "/attachments/pixel-art.png" },
      { type: "audio", src: "/attachments/song.mp3" },
    ],
  },
  {
    id: "mail-2",
    subject: "Kurze Rückfrage zu unserem Termin",
    sender: "unbekannt@example.com",
    date: "26.10.2026",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    read: true,
    attachments: [],
  },
  {
    id: "mail-3",
    subject: "Eine Idee, die ich gerne mit euch teilen würde",
    sender: "unbekannt@example.com",
    date: "26.10.2026",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    read: true,
    attachments: [],
  },
];

export default function EmailProgram() {
  const [email, setEmail] = useState(null);
  console.log(email);
  return (
    <>
      <div className="flex flex-1 flex-col">
        {email ? (
          <div className="flex flex-col bg-white p-2 relative">
            <img
              src="\icons\small\Close.png"
              className="size-5 absolute top-2 right-2"
              onClick={() => setEmail(null)}
            />
            <span>{email.subject}</span>
            <span className="text-[18px] text-mid-dark">
              from: {email.sender}
            </span>
            <ReactMarkdown>{email.body}</ReactMarkdown>
            {email.attachments.map((attachment) => {
              if (attachment.type === "audio") {
                return <Win95Audio key={attachment.src} src={attachment.src} />;
              }
              const Type = attachment.type;
              return (
                <Type
                  className="win95-audio"
                  controls={attachment.type === "audio"}
                  src={attachment.src}
                />
              );
            })}
          </div>
        ) : (
          emails.map((mail) => (
            <div
              key={mail.id}
              onClick={() => setEmail(mail)}
              className="flex flex-col border-b-2 border-mid bg-white p-2 relative"
            >
              <span>{mail.subject}</span>
              <span className="text-[18px] text-mid-dark">
                from: {mail.sender}
              </span>
              {mail.read ? null : (
                <span className="bg-primary text-white absolute right-0 top-2 p-1 text-base">
                  new
                </span>
              )}
              {mail.attachments.length > 0 ? (
                <span className="text-[18px] text-mid-dark">
                  attachments: {mail.attachments.length}
                </span>
              ) : null}
            </div>
          ))
        )}
      </div>
    </>
  );
}
