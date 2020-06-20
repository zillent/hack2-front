import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightBarItem from "../rightbar-item";
import "./rightbar-branch.css";

const RightBarBranch = (props) => {
  return (
<>
            <div className='rightbar-branch-name'> {props.name}</div>
            {props.items.map((item) => (
             <div className='rightbar-branch-content'> <RightBarItem  data={item}> </RightBarItem> </div>
            ))}
 </> );
};

export default RightBarBranch;
