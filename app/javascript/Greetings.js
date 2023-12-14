import React, { useState, useEffect } from "react";

const Greetings = () => {
  const [randomGreeting, setRandomGreeting] = useState("");

  useEffect(() => {
    fetch("/greetings.json")
      .then((response) => response.json())
      .then((data) => {
        setRandomGreeting(data[0]?.body || "");
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
