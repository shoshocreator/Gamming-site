import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
export const ProjectContext = createContext();
export const ProjectContextProvider = (props) => {
  let [Loading, setLoading] = useState(false);
  let [Game, setGame] = useState(null);
  let [PlatFormData, setPlatForm] = useState(null);
  let [SortBy, setSortBy] = useState(null);
  let [CategoriesData, setCategoriesData] = useState(null);
  const [userData, setUserData] = useState(null);
  function sveUserData() {
    let useToken = localStorage.getItem("userToken");
    setUserData(useToken);
  }

  async function GetAll() {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "882f5e6f77mshfa57ee47aae4dc5p148826jsnfcaf44f3ecdd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let res = await axios(options);
      return res;
    } catch (error) {
      return error;
    }
  }
  async function GetSingleGame(id) {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id: id },
      headers: {
        "X-RapidAPI-Key": "882f5e6f77mshfa57ee47aae4dc5p148826jsnfcaf44f3ecdd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let Game = await axios(options);
      setGame(Game?.data);
    } catch (error) {
      return error;
    }
  }
  async function GetPlatForm(i) {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { platform: i },
      headers: {
        "X-RapidAPI-Key": "882f5e6f77mshfa57ee47aae4dc5p148826jsnfcaf44f3ecdd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let PlatForm = await axios(options);
      setLoading(false);
      setPlatForm(PlatForm?.data);
    } catch (error) {
      return error;
    }
  }
  async function GetSortBy(i) {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { "sort-by": i },
      headers: {
        "X-RapidAPI-Key": "882f5e6f77mshfa57ee47aae4dc5p148826jsnfcaf44f3ecdd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let SortBy = await axios(options);
      setLoading(false);
      setSortBy(SortBy?.data);
    } catch (error) {
      return error;
    }
  }
  async function getCategories(i) {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { category: i },
      headers: {
        "X-RapidAPI-Key": "882f5e6f77mshfa57ee47aae4dc5p148826jsnfcaf44f3ecdd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      let cat = await axios(options);
      setLoading(false);
      setCategoriesData(cat?.data);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    let u = localStorage.getItem("userToken");
    if (u) {
      setUserData(u);
    } else {
      setUserData(null);
    }
    // u ? setUserData(u) : setUserData(null);
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        CategoriesData,
        getCategories,
        GetSortBy,
        SortBy,
        GetAll,
        Loading,
        setLoading,
        GetSingleGame,
        Game,
        GetPlatForm,
        PlatFormData,
        sveUserData,
        userData,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
