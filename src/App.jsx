import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

const App = () => {
  const [arr, setArr] = useState([]);

  const get_data = async () => {
    try {
      const response = await fetch("https://dummyapi.online/api/movies");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_data();
      console.log(data);
      setArr(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header/>

      <div className="flex flex-wrap">
        {arr.map((element, index) => (
          <Cards
            key={index}
            title={element.movie}
            rating={element.rating}
            img={element.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
