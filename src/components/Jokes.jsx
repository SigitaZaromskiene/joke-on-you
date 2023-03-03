import axios from "axios";
import { useEffect, useState } from "react";

function Jokes(props) {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => {
        setJoke(res.data.jokes);
      });
  }, []);

  return (
    <div>
      <div className={props.container}>
        <div>
          {joke.map((j, i) => (
            <div className={props.joke} key={i}>
              {j.setup} <div className={props.black}>{j.delivery}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jokes;
