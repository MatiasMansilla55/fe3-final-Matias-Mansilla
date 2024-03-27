import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";
const Footer = () => {
  const { state } = useContextGlobal();
  console.log(state);
  const { theme } = state;
  return (
    <footer style={{ background: theme.background }}>
      <p style={{ color: theme.font }}>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      <div>
       
        <img src="/images/ico-facebook.png" alt="dh-icon" />
        <img src="/images/ico-instagram.png" alt="dh-icon" />
        <img src="/images/ico-tiktok.png" alt="dh-icon" />
        <img src="/images/ico-whatsapp.png" alt="dh-icon" />
      </div>
    </footer>
  );
};

export default Footer;
