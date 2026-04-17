import { useEffect, useState } from "react";
import resume from "../../assets/Yogeshwaran-R.pdf";   // <-- PDF file
import "./Resume.css";

const DownloadTimer = () => {
  const [timer, setTimer] = useState(5);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Use imported PDF file
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
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = fileLink;
    link.download = "Yogeshwaran-R.pdf";   // <-- PDF filename
    link.click();

    setIsDownloading(false);

    // Show "Download Again" after a delay
    setTimeout(() => {
      setIsCompleted(true);
    }, 3000);
  };

  return (
    <div>
      <div className="resume-dow">
        {/* Optional: If you want to show PDF preview as image, remove this or replace with an icon */}
        <embed src={resume} type="application/pdf" width="100%" height="400px" />
      </div>

      {!isDownloading && !isCompleted && (
        <button onClick={startDownload} className="timer-btn">
          Start Download
        </button>
      )}

      {isDownloading && (
        <button disabled className="downloading-btn">
          Your PDF download will begin in <br /> {timer} seconds
        </button>
      )}

      {!isDownloading && isCompleted && (
        <button onClick={startDownload} className="again-btn">
          <span className="icon">⬇️</span> Download Again
        </button>
      )}
    </div>
  );
};

export default DownloadTimer;
