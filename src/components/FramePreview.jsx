import React from "react";
import { useFrame } from "../context/FrameContext";

// Use the same FRAME_TYPES array as in your other files
const FRAME_TYPES = [
  { name: "Inlay", width: 1, image: "https://static.vecteezy.com/system/resources/previews/024/682/116/non_2x/icon-design-border-frame-free-png.png" },
  { name: "V Shape", width: 2, image: "https://static.vecteezy.com/system/resources/previews/024/681/935/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Mani", width: 2, image: "https://static.vecteezy.com/system/resources/previews/024/682/000/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Dasha Avatar", width: 3, image: "/frames/dasha.png" },
  { name: "Ganda berunda", width: 3, image: "/frames/ganda.png" },
  { name: "New Frame1", width: 2, image: "/frames/mani.png" },
  { name: "New Frame2", width: 3, image: "/frames/aastha.png" },
  { name: "New Frame3", width: 3, image: "/frames/dasha.png" },
  { name: "New Frame4", width: 3, image: "/frames/ganda.png" },
];

function parseFrame(frameStr) {
  const match = frameStr.match(/(\d+)\s*[\*xX]\s*(\d+)/);
  if (!match) return { width: 42, height: 24 };
  return { width: parseInt(match[1]), height: parseInt(match[2]) };
}

const IMAGE_AREA = 8;

const FramePreview = () => {
  const { frame, gods, typeIdx } = useFrame();
  const { width: frameWidth, height: frameHeight } = parseFrame(frame || "42X24");
  const workAreaWidth = frameWidth - 6;
  const workAreaHeight = frameHeight - 6;
  const spaceForAddons = workAreaWidth;
  const selectedFrameType = FRAME_TYPES[typeIdx] || FRAME_TYPES[0];

  return (
    <div className="dimension-section">
      <h2 className="dimension-title">Frame Type</h2>
      <div className="dimension-layout">
        <div className="dimension-frame-area">
          <div className="dimension-label-top">
            Frame Width<br /><b>{frameWidth} Inches</b>
          </div>
          <div className="dimension-label-left">
            Work Area Height<br /><b>{workAreaHeight} Inches</b>
          </div>
          <div className="dimension-label-right">
            Frame Height<br /><b>{frameHeight} Inches</b>
          </div>
          <div
            className="dimension-frame"
            style={{
              borderWidth: `${selectedFrameType.width * 8}px`,
              borderStyle: "solid",
              borderImage: `url(${selectedFrameType.image}) 30 stretch`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "border-image 0.3s, border-width 0.3s"
            }}
          >
            {parseInt(gods) > 0 &&
              [...Array(Number(gods))].map((_, i) => (
                <div key={i} className="dimension-image-area">
                  Image Area<br />{IMAGE_AREA} Inches
                </div>
              ))}
          </div>
          <div className="dimension-label-bottom">
            Space for addons<br/><b>{spaceForAddons} Inches</b>
            <br />
            Work Area Width<br /><b>{workAreaWidth} Inches</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramePreview;