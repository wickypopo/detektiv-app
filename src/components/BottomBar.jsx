export default function BottomBar() {
  return (
    <div className="bottom-bar bg-mid px-2 py-2 text-2xl uppercase leading-none flex justify-between">
      <button className="flex items-center gap-2 material-out active:material-in px-4 py-2">
        {" "}
        <img src="/icons/Windows.png" />
        <span className="text-3xl">Start</span>
      </button>
      <button className="flex items-center gap-2 material-in px-4 py-2">
        {" "}
        <img src="/icons/Clock.png" />
        <span className="text-3xl">10:32 AM</span>
      </button>
    </div>
  );
}
