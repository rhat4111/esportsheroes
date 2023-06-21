import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setEmail } from "store/actions/User";
import Storage from "utils/Storage";
import API from "apis";

const Inventory = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    API.verify(token).then((res) => {
      const { email, status } = res.data;
      if (status === "success") {
        dispatch(setEmail(email));
        navigate("/inventory");
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="px-6 py-20 xl:py-30">
      <p className="text-4xl text-center">Email verification failed :(</p>
    </div>
  );
};

export default Inventory;
