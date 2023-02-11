import React, {useState, useEffect} from "react";
import Body from "./body";
import Header from "./header";

// import "./input.css";
function Input() {
  const [word, setWord] = useState("");
  const [data, setdata] = useState("");
  const setword = (event) => {
    setWord(event.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:5000/student/get?filter=" + word, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);
  const submit = async (event) => {
    let abc = {
      en: "",
    };
    event.preventDefault();
    try {
      const data = await fetch(
        "http://localhost:5000/student/get?filter=" + word,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      abc = await data.json();
      setdata(abc);
    } catch {
      setdata(abc);
    }
    setWord("");
    console.log(data);
    console.log(abc);
  };
  return (
    <div className="input">
      <center>
        <form onSubmit={submit}>
          <input
            type="text"
            id="input"
            name="input"
            placeholder="Type here to search student"
            onChange={setword}
            value={word}
          ></input>
          <br></br>
          <br></br>
          <input id="button" type="submit" value="Search"></input>
        </form>
        <Body probs={data} />
      </center>
    </div>
  );
}

export default Input;
