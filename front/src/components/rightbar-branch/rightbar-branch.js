import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightBarItem from "../rightbar-item";
import "./rightbar-branch.css";

const RightBarBranch = (props) => {
  return (
    <>
      <table><tr>
        <td className='rightbar-branch-name'>{props.name}</td>
      </tr>
      <td>
        <tr>
          {props.items.map((item) => (
            <RightBarItem data={item}></RightBarItem>
          ))}
        </tr>
      </td>
      </table>
    </>
  );
};

export default RightBarBranch;
