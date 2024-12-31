import { useEffect, useRef, useState } from "react";
import "./videoads.css";

function VideoAds() {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  const handleClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="video-ads">
          <div ref={modalRef} className="modal">
            <video
              className="video"
              autoPlay
              muted
              preload="auto"
              loop
              type="video/mp4"
            >

              <source
                src="./Video/WhatsApp Video 2024-12-23 at 20.05.17_39db4d11.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoAds;
