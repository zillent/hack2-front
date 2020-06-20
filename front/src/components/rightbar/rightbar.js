import React from "react";
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
          <table className='table' key={branch.name}><tbody>
            <tr>
            <td>
          <RightBarBranch className='table'
            name={branch.name}
            items={branch.items}
          ></RightBarBranch>
          </td>
          </tr>
          </tbody>
        </table>))}
      </>
    );
};

export default RightBar;
