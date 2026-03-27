import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import styled from "styled-components";
const POPUP_CLOSE_KEY = "new_year_popup_closed_at";
const TEN_MINUTES = 10 * 60 * 1000;

function isValidNewYearDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  return (
    (month === 11 && date === 31) ||
    (year === 2027 && month === 0 && date === 1)
  );
}

export default function NewYearPopup() {
  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (!isValidNewYearDate()) return;

    const closedAt = localStorage.getItem(POPUP_CLOSE_KEY);
    if (!closedAt || Date.now() - Number(closedAt) > TEN_MINUTES) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    localStorage.setItem(POPUP_CLOSE_KEY, Date.now().toString());
    setOpen(false);
  };

 const Title = styled.h2`
  font-family: "Maharlika", serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  font-size: clamp(28px, 5vw, 28px);
  line-height: 1.1;
  margin-bottom: 12px;
  text-align: center;
`;

  return (
    <>
      {open && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={500}
          recycle={false}
        />
      )}

      <AnimatePresence>
        {open && (
            
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={500}
          recycle={false}
        />
            <motion.div
              className="w-[90vw] md:w-[50vw] rounded-2xl bg-[#361a0c] border-2 border-white p-[50px] text-center shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Title className="mb-2 text-2xl font-bold text-white
              ">
                🎉 Happy New Year {new Date().getFullYear()} 🎉
              </Title>

              <p className="text-sm text-white">
                Cheers to new beginnings and big wins ahead!
              </p>

              <button
                onClick={handleClose}
                className="mt-5 px-4 py-2 text-white transition cursor-pointer border-2 border-white text-[#0000] "
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
