import logo from "./logo.svg";
import "./App.css";
import JumpoButton from "./components/JumpoButton";
import SearchField from "./components/SearchField";
import UseAxios from "./hooks/UseAxios";
import { createContext } from "react";
import { useState } from "react";
import Images from "./components/Images";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = UseAxios(
    `search/photos?page=3&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return (
    <ImageContext.Provider value={value}>
      <JumpoButton>
        <SearchField />
      </JumpoButton>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
