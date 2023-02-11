import React, {useState, useEffect} from "react";
import Body from "./body";
import Header from "./header";

const Field = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/field/get")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const DisplayFields = (data) => {
    try {
      console.log(data.data);
      let str = "<center><table><tr><th>Name</th><th>Type</th>";
      for (let x of data.data) {
        console.log(x);
        str += `<tr><td>${x.title}</td><td>${x.format}</td></tr>`;
      }

      return (
        <div dangerouslySetInnerHTML={{__html: str + "</table></center>"}} />
      );
    } catch (error) {}
  };
  return (
    <div className="body">
      <DisplayFields data={data?.data?.fields} />
    </div>
  );
};
export default Field;
