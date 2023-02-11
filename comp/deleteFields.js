import React, {useState} from "react";
import Body from "./body";
import Header from "./header";

// import "./input.css";
function DeleteFields() {
  const [field, setWord] = useState("");
  const [data, setdata] = useState("");
  const setword = (event) => {
    setWord(event.target.value);
  };
  const submit = async (event) => {
    let abc = {
      en: "",
    };
    // event.preventDefault();
    try {
      const data = await fetch("http://localhost:5000/field/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "field": {
              "title": field
            }
          })
      });
      abc = await data.json();
      setdata(abc);
    } catch {
      abc.en = "Word not found";
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
            id="delete"
            name="input"
            placeholder="Type the field name to delete"
            onChange={setword}
            value={field}
          ></input>
          <br></br>
          <br></br>
          <input type="submit" value="Delete"></input>
        </form>
      </center>
    </div>
  );
}

export default DeleteFields;
