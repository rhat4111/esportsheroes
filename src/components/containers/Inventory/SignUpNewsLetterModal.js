import React, { useState } from "react";
import Modal from "components/Modal";
import TextField from "components/TextField";
import Button from "components/Button";
import API from "apis";
import { useSelector } from "react-redux";

const SignUpNewsLetterModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isShowHelperText, setIsShowHelperText] = useState(false);
  const wallet = useSelector((state) => state.user.wallet);
  const handleSignUp = () => {
    if (!email) {
      setIsShowHelperText(true);
      return;
    }
    API.updateUserEmail({ email, wallet }).then(() => {
      props.onClose();
      setIsOpen(true);
    });
  };

  const handleChange = (e) => {
    setIsShowHelperText(false);
    setEmail(e.target.value);
  };

  return (
    <>
      <Modal {...props}>
        <div className="mb-5">
          <p className="text-sm mb-5">
            Please let us know the email we will send occasional updates about
            Esports Heroes to. We won't spam you, sell your address, or other
            nefarious things. Once you submit your email, please check your
            inbox and confirm your address by clicking on the link in the email.
            Thank you!
          </p>
          <TextField
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            helperText={isShowHelperText && "Please enter email address"}
          />
        </div>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </Modal>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center">
          <p className="font-bold text-4xl text-center uppercase mb-5">
            Success!
          </p>
          <p className="mb-5">
            thank you for signing up to the newsletter, please go to your inbox
            to verify your address now and then come back to continue the
            process.
          </p>
          <Button className="w-32" onClick={() => setIsOpen(false)}>
            Ok
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SignUpNewsLetterModal;
