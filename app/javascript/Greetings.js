import React, { useState, useEffect } from "react";

const Greetings = () => {
  const [greetings, setGreetings] = useState([]);
  const [randomGreeting, setRandomGreeting] = useState("");

  useEffect(() => {
    fetch("/greetings.json")
      .then((response) => response.json())
      .then((data) => {
        setGreetings(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomGreeting(data[randomIndex]?.body || "");
      })
      .catch((error) => console.error("Error fetching greetings:", error));
  }, []);

  return (
    <div>
      <h1>Greetings</h1>
      <div>{randomGreeting}</div>
    </div>
  );
};

export default Greetings;
