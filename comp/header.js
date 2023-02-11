import React from "react";
import Link from "next/link";

// import "./header.css"
function Header() {
  return (
    <div className="header">
      <center>
        <h1>Student Management System</h1>
        <ul>
          <Link href="/">Home</Link> &emsp;
          <Link href="/add-student">Add Students</Link>&emsp;
          <Link href="/fields">Manage Fields</Link>&emsp;
        </ul>
        {/* <table style={{width: "100%", borderCollapse: "collapse"}}>
          <tr>
            <td style={{border: "1px solid black", textAlign: "center"}}>
              <Link href="/">Students</Link>
            </td>
            <td style={{border: "1px solid black", textAlign: "center"}}>
              <Link href="/add-student">Add Students</Link>
            </td>
            <td style={{border: "1px solid black", textAlign: "center"}}>
              <Link href="/fields">Manage Fields</Link>
            </td>
          </tr>
        </table> */}
      </center>
    </div>
  );
}

export default Header;
