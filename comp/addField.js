import React, {useState} from "react";

function AddFields() {
  const [type, setSelectedValue] = useState("");
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const submit = async (event) => {
    // event.preventDefault();
    let abc = {
      en: "",
    };
    try {
      const data = await fetch("http://localhost:5000/field/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          field: [
            {
              title: event.target.name.value,
              format: type,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((json) => {});
      abc = await data.json();
    } catch {}
  };
  return (
    <div className="input">
      <center>
        <form onSubmit={submit}>
          <input
            type="text"
            id="name"
            name="input"
            placeholder="Field Name"
          ></input>
          <select onChange={handleDropdownChange}>
            <option value="date">date</option>
            <option value="number">number</option>
            <option value="string">string</option>
            <option value="boolean">boolean</option>
          </select>
          <br></br>
          <br></br>
          <input id="button" type="submit" value="Add"></input>
        </form>
      </center>
    </div>
  );
}

export default AddFields;
