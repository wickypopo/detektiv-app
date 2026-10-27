export default function Modal({ children, isAppSet = false, setApp, app }) {
  const Program = app?.program;
  return (
    <>
      {isAppSet ? (
        <div className="material-out absolute inset-5 bottom-20 flex flex-col p-2 z-10">
          <div className="flex bg-primary px-2 py-2 gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <img src={app?.icon} className="size-8" />
              <span className="text-white text-2xl leading-none">
                {app?.label}
              </span>
            </div>
            <div className="flex gap-1">
              <img
                onClick={() => setApp(null)}
                src="/icons/small/Minimize.png"
                className="material-out active:material-in size-8 p-2"
              />{" "}
              <img
                onClick={() => setApp(null)}
                src="/icons/small/Maximise.png"
                className="material-out active:material-in size-8 p-2"
              />{" "}
              <img
                onClick={() => setApp(null)}
                src="/icons/small/Close.png"
                className="material-out active:material-in size-8 p-2"
              />
            </div>
          </div>
          <div className="flex gap-2 px-2 py-2 text-2xl">
            <span>
              <span className="underline">F</span>ile
            </span>
            <span>
              <span className="underline">E</span>dit
            </span>
            <span>
              <span className="underline">V</span>iew
            </span>
            <span>
              <span className="underline">H</span>elp
            </span>
          </div>
          <div className="flex flex-1 bg-white material-in gap-2 px-2 py-2 text-2xl overflow-y-auto">
            <Program />
          </div>
          <div className="flex gap-2 px-2 py-1 text-2xl material-in mt-2">
            <span>4 object(s)</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
