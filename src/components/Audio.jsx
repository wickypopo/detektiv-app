import { useRef, useState } from "react";

export default function Win95Audio({ src }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function togglePlay() {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function handleSeek(e) {
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }

  function formatTime(time) {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  return (
    <div className="win95-player">
      <audio
        ref={audioRef}
        src={src}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={() => setPlaying(false)}
      />

      <button onClick={togglePlay} className="win95-player-button">
        {playing ? "❚❚" : "▶"}
      </button>

      <span className="win95-player-time">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="win95-player-slider"
      />
    </div>
  );
}
