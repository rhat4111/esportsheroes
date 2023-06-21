import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import {
  setDiscord,
  setEmail,
  setTwitter,
  setWallet,
} from "store/actions/User";
import Storage from "utils/Storage";
import Button from "components/Button";
import Sidebar from "./Sidebar";
import MenuItem from "./MenuItem";
import routes from "./routes";
import Logo from "assets/images/logo.svg";
import Menu from "assets/images/menu.svg";
import User from "assets/images/user.svg";
import API from "apis";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const wallet = useSelector((state) => state.user.wallet);

  const handleRedirect = (id) => {
    navigate("/");
    setActiveLink(id);
  };

  useEffect(() => {
    if (activeLink) {
      scroller.scrollTo(activeLink, { smooth: true });
      return;
    }
    animateScroll.scrollToTop();
  }, [activeLink]);

  const getShortAddress = (address) => {
    if (!address) return "";
    return address.slice(0, 5) + "..." + address.slice(-5);
  };

  useEffect(() => {
    const sequenceWalletInfo = Storage.get("@sequence.session");
    if (sequenceWalletInfo) {
      const walletAddress = JSON.parse(
        Storage.get("@sequence.session")
      ).accountAddress;
      dispatch(setWallet(walletAddress));
      if (pathname === "/inventory") {
        API.me({ wallet: walletAddress }).then((res) => {
          if (res.data) {
            dispatch(setDiscord(res.data.discord));
            dispatch(setTwitter(res.data.twitter));
            if (res.data.status === "active") {
              dispatch(setEmail(res.data.email));
            }
          }
        });
      } else {
        navigate("/inventory");
      }
    } else {
      navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex items-center justify-between fixed z-[1000] bg-black top-0 left-0 right-0 h-20 xl:h-25 px-6">
        <img
          src={Logo}
          onClick={() => handleRedirect(null)}
          className="h-16 xl:h-auto cursor-pointer"
          alt="logo"
        />
        <ul className="h-full hidden xl:flex items-center">
          {routes.map((route) => (
            <li key={route.id} className="h-full mx-2 2xl:mx-[18px]">
              <MenuItem
                {...route}
                active={route.id === activeLink}
                onClick={handleRedirect}
              />
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <div className="w-auto lg:w-44">
            {wallet && (
              <div className="flex items-center justify-end pr-0 sm:pr-[30px]">
                <img src={User} alt="user" />
                <span className="font-bold text-light uppercase ml-2">
                  {getShortAddress(wallet)}
                </span>
              </div>
            )}
          </div>
          <div className="hidden sm:inline-block">
            <Button className="w-[150px]">Discord</Button>
            <Button className="w-[150px] ml-3" variant="outlined">
              Whitepaper
            </Button>
          </div>
          <img
            src={Menu}
            className="flex xl:hidden cursor-pointer ml-4 hover:opacity-70"
            onClick={handleOpen}
            alt="menu"
          />
        </div>
      </div>
      <Sidebar open={isOpen} onClose={handleClose} />
    </>
  );
};

export default Header;
