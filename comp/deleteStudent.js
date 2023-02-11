import React, {useState} from "react";
import Body from "./body";
import Header from "./header";

// import "./input.css";
function DeleteStudent() {
  const [field, setWord] = useState("");
  const [data, setdata] = useState("");
  const setword = (event) => {
    setWord(event.target.value);
  };
  const submit = async (event) => {
    let abc = {
      en: "",
    };
    console.log(event.target.delete.value);
    event.preventDefault();
    try {
      const data = await fetch("http://localhost:5000/student/delete?_id="+event.target.delete.value, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
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
          <input type="submit" value="Search"></input>
        </form>
      </center>
    </div>
  );
}

export default DeleteStudent;
