// import React from "react";
// import FrameDesigner from "./components/FrameDesigner";

// const App = () => {
//   return (
//     <div>
//       <FrameDesigner />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import Navbar from "./Pages/Navbar";
import Sidebar from "./components/Sidebar";
import DimensionSection from "./Pages/DimensionSection";
// import FrameSection, FinishSection, GodsSection, AccessoriesSection from their respective files

const App = () => {
  const [selected, setSelected] = useState(0);

  // Render section based on selected sidebar menu
  function renderSection() {
    switch (selected) {
      case 0:
        return <DimensionSection />;
      // case 1: return <FrameSection />;
      // case 2: return <FinishSection />;
      // case 3: return <GodsSection />;
      // case 4: return <AccessoriesSection />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar selected={selected} onSelect={setSelected} />
        <div style={{ flex: 1, background: "#f6f7fb", minHeight: "100vh" }}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default App;