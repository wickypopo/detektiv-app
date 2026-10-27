export default function Button({ label = "Button Label" }) {
  return (
    <button
      className="
    rounded-[2px]
    bg-mid
    px-10 py-5
    text-2xl uppercase leading-none
    material-out 
    active:material-in
  "
    >
      <span className="inline-block active:translate-x-[3px] active:translate-y-[3px]">
        {label}
      </span>
    </button>
  );
}
