import React from "react";
import { useState } from "react";
import { useContextGlobal } from "../Components/utils/global.context";
const Form = () => {
  const { state } = useContextGlobal();
  const { theme } = state;
  

 
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault()
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (customer.name.length > 5 && emailRegex.test(customer.email)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <div>
      {show ? null : (
        <form onSubmit={handleSubmit}>
          <label style={{ color: theme.font }}>Nombre Completo:</label>
          <input
            type="text" id="name" name="name"
            onChange={(event) =>
              setCustomer({ ...customer, name: event.target.value })
            }
          />
          <label style={{ color: theme.font }}>Email:</label>
          <input
            type="text" id="email" name="email"
            onChange={(event) =>
              setCustomer({ ...customer, email: event.target.value })
            }
          />
          <button style={{ color: theme.font }} >Enviar</button>
        </form>
      )}

      {show ? (
        <>
          <h3 style={{ color: theme.font }}>Gracias {customer.name}!</h3>
          <h3 style={{ color: theme.font }}>te contactaremos cuanto antes vía mail</h3>
        </>
      ) : <h3 style={{ color: theme.font }}>Coloque sus datos para enviar el pedido</h3> 
        
      }

      {err && (
        <h4 style={{ color: "red" }}>
          Por favor verifique su información nuevamente
        </h4>
      )}
    </div>
  );
};

export default Form;
