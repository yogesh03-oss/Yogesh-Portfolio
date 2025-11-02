import { useEffect, useState } from "react";
import resume from "../../assets/Resume.jpg";
import "./Resume.css"


const DownloadTimer = () => {
  const [timer, setTimer] = useState(5); // countdown seconds
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  //  use imported image
  const fileLink = resume;


  useEffect(() => {
    let countdown;

    if (isDownloading && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (isDownloading && timer === 0) {
      clearInterval(countdown);
      handleDownload();
    }

    return () => clearInterval(countdown);
  }, [isDownloading, timer]);

  const startDownload = () => {
    setTimer(5);
    setIsCompleted(false);
    setIsDownloading(true);
  };

  const handleDownload = () => {
    //  Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = fileLink;
    link.download = "Resume.jpg";
    link.click();

    setIsDownloading(false);

    // After a delay, show "Download Again"
    setTimeout(() => {
      setIsCompleted(true);
    }, 3000);
  };

  //  return the JSX directly (no nested components)
  return (
    <div>
        <div className="resume-dow">
            <img src={resume} alt="" />
        </div>
      {!isDownloading && !isCompleted && (
        <button onClick={startDownload} className="timer-btn">
          Start Download
        </button>
      )}

      {isDownloading && (
        <button disabled className="downloading-btn">
          Your download will begin in <br /> {timer} seconds
        </button>
      )}

      {!isDownloading && isCompleted && (
        <button onClick={startDownload} className="again-btn">
          <span className="icon">⬇️</span> Download Again
        </button>
      )}
    </div>
  );
}

export default  DownloadTimer;