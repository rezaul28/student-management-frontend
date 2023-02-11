import React from "react";

// import "./body.css";
function Body(probs) {
  const Heading = (data) => {
    let str =
      "<center><table><tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Class</th><th>Status</th>";
    try {
      for (let x of Object.keys(data.data[0].custom_fields)) {
        str += `<th>${x}</th>`;
      }
    } catch {}
    for (let x of data.data) {
      console.log(x);
      str += `<tr><td>${x._id} </td><td>${x.name}</td><td>${x.phone}</td><td>${x.email}</td><td>${x.class}</td><td>${x.status}</td>`;
      try {
        for (let y in x.custom_fields) {
          str += `<td>${x.custom_fields[y]}</td>`;
        }
      } catch {}
      str += "</tr>";
    }
    return (
      <div dangerouslySetInnerHTML={{__html: str + "</table></center>"}} />
    );
  };
  if (probs.probs.data) {
    console.log(probs.probs.data);
    return (
      <div className="body">
        <Heading data={probs.probs.data} />
      </div>
    );
  } else {
    return (
      <div className="body">
      </div>
    );
  }
}

export default Body;
