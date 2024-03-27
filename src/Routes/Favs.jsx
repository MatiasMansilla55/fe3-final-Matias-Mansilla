import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state,dispatch } = useContextGlobal();
  const { theme } = state;

  const localData = localStorage.getItem("favs");
  console.log(localData);
  const objects = JSON.parse(localData);
  const arrayObjects = objects ? objects : [];

  const handleRemoveFromFavorites = (id) => {
    dispatch({ type: "DELETE_FAV", payload: id });
    const updatedFavs = state.favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       {arrayObjects.map((fav) => (
          <Card key={fav.id} item={fav}> 
            <button
              onClick={() => handleRemoveFromFavorites(fav.id)}
              style={{ margin: "10px" }}
            >
              Eliminar Favorito
            </button>
          </Card>
        ))}
       
      </div>
      
    </div>
          

  );
};

export default Favs;
