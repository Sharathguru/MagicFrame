import React, { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "magicframes-dimension";
const TYPE_KEY = "magicframes-type-idx";

const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
  const getInitial = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const savedType = localStorage.getItem(TYPE_KEY);
    let typeIdx = savedType ? parseInt(savedType) : 0;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          frame: parsed.frame || "42X24",
          gods: parsed.gods || "3",
          typeIdx,
        };
      } catch {
        return { frame: "42X24", gods: "3", typeIdx };
      }
    }
    return { frame: "42X24", gods: "3", typeIdx };
  };

  const [frame, setFrame] = useState(getInitial().frame);
  const [gods, setGods] = useState(getInitial().gods);
  const [typeIdx, setTypeIdx] = useState(getInitial().typeIdx);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ frame, gods }));
  }, [frame, gods]);

  useEffect(() => {
    localStorage.setItem(TYPE_KEY, typeIdx);
  }, [typeIdx]);

  return (
    <FrameContext.Provider value={{ frame, setFrame, gods, setGods, typeIdx, setTypeIdx }}>
      {children}
    </FrameContext.Provider>
  );
};

export const useFrame = () => useContext(FrameContext);