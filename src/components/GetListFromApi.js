import React, { useState, useEffect } from "react";
import axios from "axios";

const GetListFromApi = ({ query }) => {
  const API_URL = "http://172.20.21.59:1337";
  const [lists, setLists] = useState([]);

  useEffect(function () {
    axios
      .get(`${API_URL}/${query}`)
      .then((result) => {
        setLists(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <></>;
};

export default GetListFromApi;
