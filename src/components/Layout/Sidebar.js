import React, { useEffect } from "react";
import Button from "components/Button";
import routes from "./routes";
import Logo from "assets/images/logo.svg";
import Close from "assets/images/close.svg";

const Sidebar = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed w-full h-screen top-0 left-0 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 w-80 h-screen bg-black z-50 border-r border-r-gray-700 transition ${
          open ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <img
          src={Close}
          className="cursor-pointer absolute top-5 right-5"
          alt="close"
          onClick={onClose}
        />
        <img src={Logo} className="mx-auto my-5" alt="logo" />
        <ul className="w-full px-5">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`mb-2 last:mb-0 uppercase relative w-full h-10 flex justify-center items-center text-light ${
                route.id === "gameplay"
                  ? `bg-success clip-button-outline before:absolute before:w-full before:h-full before:bg-dark before:top-0 before:left-0 before:clip-button-inline`
                  : ``
              }`}
            >
              <span className="relative z-10">{route.label}</span>
            </li>
          ))}
        </ul>
        <div className="absolute left-5 right-5 bottom-5 flex flex-col items-center">
          <Button containerClassName="w-full" className="mb-2" fullWidth>
            Discord
          </Button>
          <Button
            containerClassName="w-full"
            className="mb-4"
            variant="outlined"
            fullWidth
          >
            Whitepaper
          </Button>
          <p>Legendary Play © 2022</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
