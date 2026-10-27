export default function DesktopIcon({
  icon = "/icons/Folder.png",
  label = "Label Here",
  onClick,
  light = true,
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center relative max-w-45"
    >
      <img src={icon} className="size-[64px] object-fill image-rendering" />
      <span
        className={`${light ? "text-white" : "text-black"} text-xl break-words`}
      >
        {label}
      </span>
    </button>
  );
}
