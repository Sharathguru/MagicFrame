import React from "react";
import { FrameProvider } from "./context/FrameContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import DimensionSection from "./Pages/DimensionSection";
import FrameTypeSection from "./Pages/FrameTypeSection";
// import FinishSection, GodsSection, AccessoriesSection as needed

const App = () => {
  return (
    <FrameProvider>
      <Router>
        <Navbar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, background: "#f6f7fb", minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dimensions" />} />
              <Route path="/dimensions" element={<DimensionSection />} />
              <Route path="/frame" element={<FrameTypeSection />} />
              {/* <Route path="/finish" element={<FinishSection />} /> */}
              {/* <Route path="/gods" element={<GodsSection />} /> */}
              {/* <Route path="/accessories" element={<AccessoriesSection />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </FrameProvider>
  );
};

export default App;