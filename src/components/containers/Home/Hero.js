import React, { useEffect, useState } from "react";
import { sequence } from "0xsequence";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDiscord,
  setEmail,
  setTwitter,
  setWallet,
} from "store/actions/User";
import YouTube from "react-youtube";
import Button from "components/Button";
import Heros from "assets/images/heros.png";
import API from "apis";

sequence.initWallet("mainnet", { walletAppURL: "https://sequence.app" });

const Hero = () => {
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState({
    remaining: 0,
    date: null,
  });
  const wallet = sequence.getWallet();
  const navigate = useNavigate();
  const opts = {
    width: "640",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const handleConnect = async () => {
    const { connected } = await wallet.connect({ app: "Esports Heroes" });

    if (connected) {
      const address = await wallet.getAddress();
      API.register({ wallet: address }).then((res) => {
        dispatch(setDiscord(res.data.discord));
        dispatch(setTwitter(res.data.twitter));
        if (res.data.status === "active") {
          dispatch(setEmail(res.data.email));
        }
        navigate("/inventory");
        dispatch(setWallet(address));
      });
    }
  };

  useEffect(() => {
    API.getCountdown().then((res) => {
      if (res.data.length > 0) {
        const data = res.data[0];
        setCountdown({
          remaining: data.remaining,
          date: data.date.slice(0, 10),
        });
      }
    });
  }, []);

  return (
    <div className="px-6 relative overflow-hidden bg-main">
      <img
        src={Heros}
        className="w-full md:w-2/3 xl:w-auto absolute -bottom-5 left-0"
        alt="heros"
      />
      <div className="w-full max-w-8xl mx-auto flex relative z-10">
        <div className="w-full hidden xl:flex items-center">
          <YouTube videoId="nCYifiIAMOo" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="w-full xl:w-[698px] flex-shrink-0">
          <div className="w-full flex flex-col items-center xl:items-end py-20 lg:pt-35 lg:pb-28">
            <div className="mb-5 font-bold text-5xl lg:text-[120px] leading-8 lg:leading-[80px] uppercase text-right">
              <p className="text-transparent text-stroke-2 text-stroke-success opacity-30 pr-10 lg:pr-30 mb-5">
                get your
              </p>
              <p className="text-light">free pro!</p>
            </div>
            <p className="uppercase font-semibold text-xl lg:text-[28px] text-success leading-6 lg:leading-[34px] mb-5 lg:mb-8 text-right">
              only {countdown.remaining} Heroes left! until {countdown.date}
            </p>
            <p className="text-xl lg:text-[28px] leading-6 lg:leading-[34px] text-center xl:text-right mb-10 lg:mb-16">
              The pop-culturization of the esports industry has helped power the
              explosions in esports investment and revenue.
              <br />
              The pop-culturization of the esports industry has helped power the
              explosions in esports investment and revenue.
            </p>
            <Button className="w-45" size="lg" onClick={handleConnect}>
              Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
