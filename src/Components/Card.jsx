import React, { Children } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ item, children }) => {
  const { state, dispatch } = useContextGlobal();
  const { theme } = state;

  const addFav = () => {
    const isDuplicate = state.favs.some((card) => card.id === item.id);
    if (isDuplicate) {
      alert("La card ya existe en favoritos");
    } else {
      const newItem = {
        id: item.id,
        name: item.name,
        username: item.username,
      };
      dispatch({ type: "ADD_FAV", payload: newItem });
    }
  };

  return (
    <div className="card" style={{ background: theme.background }}>
      <img src="/images/doctor.jpg" />
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"detail/" + item.id}>
        <h3 style={{ color: theme.font }}>{item.name}</h3>
        <h3 style={{ color: theme.font }}>{item.username}</h3>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        style={{ color: theme.font }}
        onClick={addFav}
        className="favButton"
      >
        Add fav
      </button>
      {children}
    </div>
  );
};

export default Card;
