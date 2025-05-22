import React, { useState } from "react";
import { useFrame } from "../context/FrameContext";
import DimensionSection from "./DimensionSection";
import "../css/FrameTypeSection.css";

// Example frame types (replace images with your own)
const FRAME_TYPES = [
  { name: "Inlay", width: 1, image: "https://static.vecteezy.com/system/resources/previews/024/682/116/non_2x/icon-design-border-frame-free-png.png" },
  { name: "V Shape", width: 2, image: "https://static.vecteezy.com/system/resources/previews/024/681/935/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Mani", width: 2, image: "https://static.vecteezy.com/system/resources/previews/024/682/000/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Aastha Lakshmi", width: 3, image: "https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png" },
  { name: "Dasha Avatar", width: 3, image: "/frames/dasha.png" },
  { name: "Ganda berunda", width: 3, image: "/frames/ganda.png" },
  // Add more frames if needed
  { name: "New Frame1", width: 2, image: "/frames/mani.png" },
  { name: "New Frame2", width: 3, image: "/frames/aastha.png" },
  { name: "New Frame3", width: 3, image: "/frames/dasha.png" },
  { name: "New Frame4", width: 3, image: "/frames/ganda.png" },
];

const PAGE_SIZE = 6;

const FrameTypeSection = () => {
  const { typeIdx, setTypeIdx } = useFrame();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(FRAME_TYPES.length / PAGE_SIZE);

  // Calculate which frames to show on this page
  const startIdx = page * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const visibleFrames = FRAME_TYPES.slice(startIdx, endIdx);

  return (
    <div className="frame-type-section">
      {/* Frame preview and editable card */}
      <DimensionSection />

      {/* Frame type selector */}
      <div className="frame-type-selector">
        <div className="frame-type-header-row">
          <h3>Select your Frame Type</h3>
          <div className="frame-type-pagination-arrows">
            <button
              className="frame-type-arrow"
              onClick={() => setPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="frame-type-arrow"
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages - 1}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className="frame-type-list">
          {visibleFrames.map((type, idx) => {
            const globalIdx = startIdx + idx;
            return (
              <div
                key={type.name}
                className={`frame-type-item${
                  typeIdx === globalIdx ? " selected" : ""
                }`}
                onClick={() => setTypeIdx(globalIdx)}
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="frame-type-thumb"
                />
                <div className="frame-type-name">{type.name}</div>
                <div className="frame-type-width">
                  {type.width} Inch Frame width
                </div>
                {typeIdx === globalIdx && <div className="frame-type-check">✔</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrameTypeSection;