export default function DesktopIcon({
  icon = "/icons/Folder.png",
  label = "Label Here",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center relative"
    >
      <img src={icon} className="size-16 object-fill" />
      <span className="text-white text-xl">{label}</span>
    </button>
  );
}
