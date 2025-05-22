import React, { useState } from "react";
import { useFrame } from "../context/FrameContext";
import "../css/DimensionSection.css";
import Sidebar from "../components/Sidebar";

// Use the same FRAME_TYPES array as in FrameTypeSection
const FRAME_TYPES = [
  { name: "Inlay", width: 1, image: "https://static.vecteezy.com/system/resources/previews/024/682/116/non_2x/icon-design-border-frame-free-png.png" },
  { name: "V Shape", width: 2, image: "https://static.vecteezy.com/system/resources/previews/024/681/935/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Mani", width: 2, image: "https://static.vecteezy.com/system/resources/previews/024/682/000/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://    static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
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

const DimensionSection = ({ selected, onSelect }) => {
  const { frame, setFrame, gods, setGods, typeIdx } = useFrame();
  const [edit, setEdit] = useState(false);
  const [tempFrame, setTempFrame] = useState(frame);
  const [tempGods, setTempGods] = useState(gods);

  const frameToParse = edit ? tempFrame : frame;
  const godsToUse = edit ? tempGods : gods;

  const { width: frameWidth, height: frameHeight } = parseFrame(frameToParse || "42X24");
  const workAreaWidth = frameWidth - 6;
  const workAreaHeight = frameHeight - 6;
  const spaceForAddons = workAreaWidth;

  const handleSave = () => {
    setFrame(tempFrame);
    setGods(tempGods);
    setEdit(false);
  };

  // Get the selected frame type
  const selectedFrameType = FRAME_TYPES[typeIdx] || FRAME_TYPES[0];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar selected={selected} onSelect={onSelect} />
      <div style={{ flex: 1 }}>
        <div className="dimension-section">
          <h2 className="dimension-title">Frame Dimensions</h2>
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
                  borderImage: `url(${selectedFrameType.image}) 30 stretch`, // 30 is a good default, adjust as needed
                  // background: "#fff",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "border-image 0.3s, border-width 0.3s"
                }}
              >
                {parseInt(godsToUse) > 0 &&
                  [...Array(Number(godsToUse))].map((_, i) => (
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
            {/* Editable Card */}
            <div className="dimension-card">
              {!edit ? (
                <div className="dimension-card-content">
                  <div>
                    <span className="dimension-card-label">Frame</span>
                    <span className="dimension-card-value">{frame}</span>
                  </div>
                  <div>
                    <span className="dimension-card-label">No. of Gods</span>
                    <span className="dimension-card-value">{gods}</span>
                  </div>
                  <button className="dimension-edit-btn" onClick={() => {
                    setTempFrame(frame);
                    setTempGods(gods);
                    setEdit(true);
                  }}>
                    <span role="img" aria-label="edit">✏️</span>
                  </button>
                </div>
              ) : (
                <div className="dimension-card-content">
                  <div>
                    <span className="dimension-card-label">Frame</span>
                    <input
                      className="dimension-card-input"
                      value={tempFrame}
                      onChange={e => setTempFrame(e.target.value)}
                      placeholder="e.g. 42X24"
                    />
                  </div>
                  <div>
                    <span className="dimension-card-label">No. of Gods</span>
                    <input
                      className="dimension-card-input"
                      type="number"
                      min={1}
                      value={tempGods}
                      onChange={e => setTempGods(e.target.value)}
                      placeholder="e.g. 3"
                    />
                  </div>
                  <button className="dimension-save-btn" onClick={handleSave}>
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionSection;