import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDiscord, setTwitter } from "store/actions/User";
import SignUpNewsLetterModal from "components/containers/Inventory/SignUpNewsLetterModal";
import Button from "components/Button";
import CheckBox from "components/CheckBox";
import API from "apis";
import Hero from "assets/images/hero.png";
import HeroShadow from "assets/images/hero-shadow.png";

const Inventory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [hero, setHero] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { email, discord, twitter, wallet } = useSelector(
    (state) => state.user
  );
  const handleGetHero = () => {
    setHero(true);
  };

  const handleConnectTwitter = () => {
    API.updateUserTwitter({ twitter: true, wallet }).then(() => {
      dispatch(setTwitter(true));
      window.open("https://twitter.com/EsportsHeroesGG");
    });
  };

  const handleConnectDiscord = () => {
    window.open(
      "https://discord.com/api/oauth2/authorize?client_id=1028004377769820190&permissions=1&redirect_uri=https%3A%2F%2Ffree.esportsheroes.gg%2Finventory&response_type=code&scope=email%20identify%20guilds%20guilds.join"
    );
  };

  useEffect(() => {
    if (code && wallet) {
      API.addDiscordGuildMember(code).then((res) => {
        const { email, status } = res.data;
        if (status) {
          API.updateUserDiscord({
            discord: email,
            wallet,
          }).then(() => {
            dispatch(setDiscord(email));
            navigate("/inventory");
          });
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  return (
    <div className="px-6 py-20 xl:py-30">
      <div className="flex flex-col xl:flex-row w-full max-w-8xl mx-auto">
        <div className="w-full">
          <div className="w-full max-w-full xl:max-w-[640px] flex flex-col items-center xl:items-start">
            <div className="font-bold text-5xl lg:text-[120px] leading-8 lg:leading-[80px] uppercase text-center mb-10 lg:mb-18">
              <p className="text-transparent text-stroke-2 text-stroke-success opacity-30 mb-5">
                {hero ? `it’s a` : `Hello`}
              </p>
              <p className="text-light">{hero ? `Success` : `Welcome`}</p>
            </div>
            <p className="text-xl lg:text-[28px] leading-6 lg:leading-[34px] mb-10 lg:mb-11 text-center xl:text-left">
              The pop-culturization of the esports industry has helped power the
              explosions in esports investment and revenue. <br />
              <br />
              The pop-culturization of the esports industry has helped power the
              explosions in esports investment and revenue.
            </p>
            {hero ? (
              <Button className="w-[246px]" size="lg">
                Start Conversation!
              </Button>
            ) : (
              <div className="uppercase font-semibold text-xl lg:text-[28px] leading-6 lg:leading-[34px]">
                <div className="flex items-center mb-5 lg:mb-7">
                  <CheckBox size="lg" checked={discord} />
                  <span
                    className="cursor-pointer transition hover:opacity-70 ml-3 lg:ml-5"
                    onClick={handleConnectDiscord}
                  >
                    Join Discord
                  </span>
                </div>
                <div className="flex items-center mb-5 lg:mb-7">
                  <CheckBox size="lg" checked={twitter} />
                  <span
                    className="cursor-pointer transition hover:opacity-70 ml-3 lg:ml-5"
                    onClick={handleConnectTwitter}
                  >
                    Follow Twitter
                  </span>
                </div>
                <div className="flex items-center mb-5 lg:mb-7">
                  <CheckBox size="lg" checked={email} />
                  <p
                    className="cursor-pointer transition hover:opacity-70 ml-3 lg:ml-5"
                    onClick={() => setIsOpen(true)}
                  >
                    Sign Up for Newsletter
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center xl:justify-end items-start pt-12">
          <div className="relative">
            {hero ? (
              <img src={Hero} className="w-[455px]" alt=":( Not Found" />
            ) : (
              <>
                <img
                  src={HeroShadow}
                  className="w-[455px]"
                  alt=":( Not Found"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Button
                    className="w-[180px]"
                    size="lg"
                    onClick={handleGetHero}
                    animation={twitter && discord && email}
                    disabled={!(twitter && discord && email)}
                  >
                    Get Now!
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <SignUpNewsLetterModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Inventory;
