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
      <img src={icon} className="size-[64px] object-fill image-rendering" />
      <span className="text-white text-xl">{label}</span>
    </button>
  );
}
