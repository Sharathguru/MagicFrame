import React, { useState, useEffect } from "react";
import "../css/DimensionSection.css";

function parseFrame(frameStr) {
  // Expects format like "42X24 Inches" or "42*24"
  const match = frameStr.match(/(\d+)\s*[\*xX]\s*(\d+)/);
  if (!match) return { width: 42, height: 24 };
  return { width: parseInt(match[1]), height: parseInt(match[2]) };
}

const IMAGE_AREA = 8;

const STORAGE_KEY = "magicframes-dimension";

const DimensionSection = () => {
  // Load from localStorage or use defaults
  const getInitial = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          frame: parsed.frame || "",
          gods: parsed.gods || "",
        };
      } catch {
        return { frame: "", gods: "" };
      }
    }
    return { frame: "", gods: "" };
  };

  const [frame, setFrame] = useState(getInitial().frame);
  const [gods, setGods] = useState(getInitial().gods);
  const [edit, setEdit] = useState(false);

  const [tempFrame, setTempFrame] = useState(frame);
  const [tempGods, setTempGods] = useState(gods);

  // Save to localStorage whenever frame or gods changes
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ frame, gods })
    );
  }, [frame, gods]);

  // Use temp values when editing, else use saved values
  const frameToParse = edit ? tempFrame : frame;
  const godsToUse = edit ? tempGods : gods;

  // Parse frame dimensions
  const { width: frameWidth, height: frameHeight } = parseFrame(frameToParse || "42X24");
  const workAreaWidth = frameWidth - 6;
  const workAreaHeight = frameHeight - 6;
  const spaceForAddons = workAreaWidth;

  const handleSave = () => {
    setFrame(tempFrame);
    setGods(tempGods);
    setEdit(false);
  };

  return (
    <div className="dimension-section">
      <h2 className="dimension-title">Frame Dimensions</h2>
      <div className="dimension-layout">
        {/* Frame Visual */}
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
          <div className="dimension-frame">
            {/* Only show image areas if godsToUse is a positive number */}
            {parseInt(godsToUse) > 0 &&
              [...Array(Number(godsToUse))].map((_, i) => (
                <div key={i} className="dimension-image-area">
                  Image Area<br />{IMAGE_AREA} Inches
                </div>
              ))}
          </div>
          <div className="dimension-label-bottom">
            Space for addons<br /><b>{spaceForAddons} Inches</b>
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
  );
};

export default DimensionSection;