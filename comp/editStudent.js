import React, {useState, useEffect} from "react";

function EditStudent() {
  const [data, setData] = useState([]);
  const [inputString, setInputString] = useState("");
  const [status, setSelectedValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/field/get")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data.fields);
        let str = "";
        for (let x of json.data.fields) {
          str += `<input  type="text"  id="${x.title}"  name="input"  placeholder="${x.title}"></input>`;
        }
        setInputString(str);
      });
  }, []);
  const submit = async (event) => {
    event.preventDefault();
    let obj = {
      id: event.target.id.value,
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      status,
      class: event.target.class.value,
    };
    console.log(data);
    for (let x of data) {
      obj[x.title] = event.target[x.title].value;
    }
    console.log(obj);
    try {
      const data = await fetch("http://localhost:5000/student/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
      abc = await data.json();
      console.log(abc);
    } catch {}
  };
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="input">
      <center>
        <form onSubmit={submit}>
          <input type="text" id="id" name="input" placeholder="ID"></input>
          <input type="text" id="name" name="input" placeholder="Name"></input>
          <input
            type="text"
            id="email"
            name="input"
            placeholder="Email"
          ></input>
          <input
            type="text"
            id="phone"
            name="input"
            placeholder="Phone"
          ></input>
          <input
            type="text"
            id="class"
            name="input"
            placeholder="Class"
          ></input>
          <select onChange={handleDropdownChange}>
            <option value="Unconfirmed">Unconfirmed</option>
            <option value="Admitted">Admitted</option>
            <option value="Terminated">Terminated</option>
          </select>
          <div dangerouslySetInnerHTML={{__html: inputString}} />
          <br></br>
          <br></br>
          <input id="button" type="submit" value="Edit"></input>
        </form>
      </center>
    </div>
  );
}

export default EditStudent;
