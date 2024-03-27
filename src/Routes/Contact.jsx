import React from "react";
import Form from "../Components/Form";
import { useContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContextGlobal();
  const { theme } = state;
  return (
    <div style={{ background: theme.background }}>
      <h2 style={{ color: theme.font }}>Want to know more?</h2>
      <p style={{ color: theme.font }}>
        Send us your questions and we will contact you
      </p>
      <Form />
    </div>
  );
};

export default Contact;
