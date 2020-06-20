import React from "react";
import RightBarItem from "../rightbar-item";
import "./rightbar-branch.css";

const RightBarBranch = (props) => {
  return (
    <>
            <div className='rightbar-branch-name'> {props.name}</div>
            {props.items.map((item) => (
             <div className='rightbar-branch-content' key={item.name}> <RightBarItem  data={item}> </RightBarItem></div>
            ))}

    </>
  );
};

export default RightBarBranch;
