import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import god1 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD1.jpeg'
import god2 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD2.jpeg'
import god3 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD3.jpeg'
import god4 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD4.jpeg'


const GOD_OPTIONS = [
  { id: 1, name: "God 1", image: god1 },
  { id: 2, name: "God 2", image: god2 },
  { id: 3, name: "God 3", image: god3 },
  { id: 4, name: "God 4", image: god4 },
  { id: 5, name: "God 5", image:  god1},
  { id: 6, name: "God 6", image:  god2},
  { id: 7, name: "God 7", image: god3},
  { id: 8, name: "God 8", image:  god4},
  { id: 9, name: "God 9", image:  god1},
];

const IMAGE_AREAS = 3;
const PAGE_SIZE = 6;

function GodOption({ god }) {
  const [{ isDragging }, drag] = useDrag({
    type: "GOD",
    item: { god },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "2px solid #8b5cf6",
        borderRadius: 14,
        padding: "18px 8px",
        background: "#fff",
        cursor: "grab",
        width: 160,
        minHeight: 170,
        textAlign: "center",
        boxShadow: "0 2px 12px rgba(56,56,80,0.07)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "box-shadow 0.2s, border 0.2s",
      }}
    >
      <img
        src={god.image}
        alt={god.name}
        style={{
          width: 100,
          height: 100,
          objectFit: "contain",
          marginBottom: 10,
          borderRadius: 10,
          background: "#f6f7fb",
        }}
      />
      <div style={{ fontSize: 15, fontWeight: 600, color: "#22223b" }}>{god.name}</div>
    </div>
  );
}

function GodDropArea({ god, onDrop }) {
  const [{ isOver }, drop] = useDrop({
    accept: "GOD",
    drop: (item) => onDrop(item.god),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{
        width: 140,
        height: 180,
        margin: "0 16px 24px 16px",
        background: isOver ? "#e0e7ff" : "#fff",
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(56,56,80,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // border: "2px dashed #8b5cf6",
        transition: "background 0.2s",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {god ? (
        <img
          src={god.image}
          alt={god.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 10,
          }}
        />
      ) : (
        <>
          <span style={{ color: "#bbb" }}>Drop God Here</span>
          <div style={{ fontWeight: 500, fontSize: "1.05rem", color: "#22223b" }}>
            Image Area<br />8 Inches
          </div>
        </>
      )}
    </div>
  );
}

const GodsSection = () => {
  const [assignedGods, setAssignedGods] = useState(Array(IMAGE_AREAS).fill(null));
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(GOD_OPTIONS.length / PAGE_SIZE);
  const startIdx = page * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const visibleGods = GOD_OPTIONS.slice(startIdx, endIdx);

  const handleDrop = (idx, god) => {
    setAssignedGods((prev) => {
      const updated = [...prev];
      updated[idx] = god;
      return updated;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <div className="dimension-section">
            <h2 className="dimension-title">Select Gods</h2>
            <div className="dimension-layout" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
              {/* Frame and card */}
              <div style={{ flex: 1, display: "flex", flexDirection: "row", gap: 32 }}>
                <div className="dimension-frame-area">
                  <div className="dimension-label-top">Frame Width (42 Inches)</div>
                  <div className="dimension-label-left">Work Area Height<br /><b>18 Inches</b></div>
                  <div className="dimension-label-right">Frame Height<br /><b>24 Inches</b></div>
                  <div
                    className="dimension-frame"
                    style={{
                      borderWidth: "16px",
                      borderStyle: "solid",
                      borderImage: "url(https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png) 30 stretch",
                      background: "#23232f",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      position: "relative",
                      height: 220,
                      width: 540,
                    }}
                  >
                    {[...Array(IMAGE_AREAS)].map((_, i) => (
                      <GodDropArea
                        key={i}
                        god={assignedGods[i]}
                        onDrop={(god) => handleDrop(i, god)}
                      />
                    ))}
                  </div>
                  <div className="dimension-label-bottom">
                    Space for Accessories (36 Inches)<br />
                    Work Area Width (36 Inches)
                  </div>
                </div>
                <div className="dimension-card" style={{ minWidth: 220, maxWidth: 260 }}>
                  <div className="dimension-card-content">
                    <div>
                      <span className="dimension-card-label">Frame</span>
                      <span className="dimension-card-value">42X24 Inches</span>
                    </div>
                    <div>
                      <span className="dimension-card-label">No. of Gods</span>
                      <span className="dimension-card-value">{IMAGE_AREAS}</span>
                    </div>
                    <div>
                      <span className="dimension-card-label">Frame Type</span>
                      <span className="dimension-card-value">V Shape 2 Inches</span>
                    </div>
                    <div>
                      <span className="dimension-card-label">Finish</span>
                      <span className="dimension-card-value">Gold Polish</span>
                    </div>
                    <button className="dimension-edit-btn">
                      <span role="img" aria-label="edit">✏️</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* God options row below, aligned left */}
            <h4 style={{ margin: "52px 0 0 32px", color: "#22223b" }}>Choose God</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 24,
                margin: "30px 0 0 32px",
                padding: "24px 0 32px 0",
                background: "#e5e7ef",
                borderRadius: 18,
                maxWidth: 1070,
                boxSizing: "border-box",
                overflowX: "auto",
              }}
            >
              {visibleGods.map((god) => (
                <GodOption key={god.id} god={god} />
              ))}
            </div>
            {/* Pagination controls */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                style={{
                  cursor: page === 0 ? "not-allowed" : "pointer",
                  opacity: page === 0 ? 0.5 : 1,
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: "#8b5cf6",
                  color: "#fff",
                  fontWeight: 500,
                  marginRight: 8,
                }}
              >
                Previous
              </button>
              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
                disabled={page === totalPages - 1}
                style={{
                  cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                  opacity: page === totalPages - 1 ? 0.5 : 1,
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: "#8b5cf6",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default GodsSection;