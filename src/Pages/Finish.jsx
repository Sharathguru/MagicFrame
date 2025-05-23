import React from "react";
import Sidebar from "../components/Sidebar";

// Import the same images and localStorage key as in GodsSection
import god1 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD1.jpeg';
import god2 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD2.jpeg';
import god3 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD3.jpeg';
import god4 from 'C:/Users/KARTHIK SARATH/Downloads/New folder/GOD4.jpeg';

const GOD_OPTIONS = [
  { id: 1, name: "God 1", image: god1 },
  { id: 2, name: "God 2", image: god2 },
  { id: 3, name: "God 3", image: god3 },
  { id: 4, name: "God 4", image: god4 },
  { id: 5, name: "God 5", image: god1 },
  { id: 6, name: "God 6", image: god2 },
  { id: 7, name: "God 7", image: god3 },
  { id: 8, name: "God 8", image: god4 },
  { id: 9, name: "God 9", image: god1 },
];

const IMAGE_AREAS = 3;
const LOCAL_STORAGE_KEY = "assignedGods";

const Finish = () => {
  // Get assigned gods from localStorage
  const assignedGods = (() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!saved) return Array(IMAGE_AREAS).fill(null);
    const arr = JSON.parse(saved);
    // Map to GOD_OPTIONS to get image and name
    return arr.map(god =>
      god
        ? GOD_OPTIONS.find(opt => opt.id === god.id) || null
        : null
    );
  })();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 40, background: "#f6f7fb", minHeight: "100vh" }}>
        <h2 style={{ color: "#22223b", marginBottom: 32 }}>Your Finished Frame</h2>
        <div
          className="dimension-frame"
          style={{
            borderWidth: "16px",
            borderStyle: "solid",
            borderImage:
              "url(https://static.vecteezy.com/system/resources/previews/024/681/931/non_2x/icon-design-border-frame-free-png.png) 30 stretch",
            background: "#23232f",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            height: 220,
            width: 540,
            margin: "0 auto",
          }}
        >
          {assignedGods.map((god, i) =>
            god ? (
              <div
                key={i}
                style={{
                  width: 140,
                  height: 180,
                  margin: "0 16px 24px 16px",
                  background: "#fff",
                  borderRadius: 10,
                  boxShadow: "0 2px 8px rgba(56,56,80,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
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
              </div>
            ) : (
              <div
                key={i}
                style={{
                  width: 140,
                  height: 180,
                  margin: "0 16px 24px 16px",
                  background: "#f6f7fb",
                  borderRadius: 10,
                  boxShadow: "0 2px 8px rgba(56,56,80,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#bbb",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Empty
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Finish;