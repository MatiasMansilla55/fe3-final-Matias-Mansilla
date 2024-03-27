import React from "react";
import axios from "axios";
import { useContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const { state, dispatch } = useContextGlobal();
  const { DentistSelected, theme } = state;

  useEffect(() => {
    axios(url).then((res) =>
      dispatch({ type: "GET_DENTIST", payload: res.data })
    );
  }, []);
  console.log(DentistSelected);
  return (
    <div className="detail" style={{ background: theme.background }}>
      <h1>Detail Dentist id:{DentistSelected.id} </h1>

      <h2 style={{ color: theme.font }}>{DentistSelected.name}</h2>
      <h3 style={{ color: theme.font }}>{DentistSelected.email}</h3>
      <h4 style={{ color: theme.font }}>{DentistSelected.phone}</h4>
      <h5 style={{ color: theme.font }}>{DentistSelected.website}</h5>
    </div>
  );
};

export default Detail;
