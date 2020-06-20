import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./rightbar.css";
import RightBarBranch from "../rightbar-branch/rightbar-branch";

  const RightBar = (props) => {
    let IdeaList = [
      {
        name: "ПОПУЛЯРНЫЕ ТЕГИ",
        items: [
          { name: "#Реклама", link: 'fsefs'},
          { name: "#Продвижение",  link: 'fsefs'},
          { name: "#Мусор",  link: 'fsefs'},
          { name: "#Автоматизация процесса",  link: 'fsefs'}
        ],
      }
    ];
    return (
      <>
        {IdeaList.map((branch) => (
          <table>
            <tr>
            <td>
          <RightBarBranch className='table'
            name={branch.name}
            items={branch.items}
          ></RightBarBranch>
          </td>
          </tr>
        </table>))}
      </>
    );
};

export default RightBar;
