import React, { useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {open && (
        <div className="fixed flex justify-center items-center w-full h-screen top-0 left-0 overflow-y-auto z-[9999] py-10">
          <div
            className="fixed w-full h-screen top-0 left-0 bg-black opacity-70"
            onClick={onClose}
          />
          <div className="w-full max-w-xl relative text-light bg-success clip-modal-outline before:absolute before:w-full before:h-full before:bg-black before:top-0 before:left-0 before:clip-modal-inline p-10 animate-modal">
            <div className="relative">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
