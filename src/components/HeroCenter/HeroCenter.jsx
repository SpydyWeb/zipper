import React from "react";
import "./HeroCenter.css";
import topvideoMp4 from "../../assets/topVideo.mp4"; // MP4 video
import topvideoWebm from "../../assets/topVideo.webm"; // WebM video
import videothumbnail from "../../assets/topVideothumbnail.png"; // Thumbnail image

const HeroCenter = () => {
  return (
    <div className="heroCenter">
      <div className="heroCenterHeading">
        Unlock Limitless <span>Untapped</span>
        <br /> Liquidity In DeFi
      </div>
      <div className="heroContent">
        Xythum lets you access the hidden reserves of DeFi with an experience of unmatched liquidity, privacy, and efficiency across chains—driving the future of decentralized finance.
      </div>
      <div className="lightImage">
        <video
          width="80%"
          height="auto"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={videothumbnail}
        >
          {/* WebM format for better compression */}
          <source src={topvideoWebm} type="video/webm" />
          {/* MP4 as fallback */}
          <source src={topvideoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroCenter;
