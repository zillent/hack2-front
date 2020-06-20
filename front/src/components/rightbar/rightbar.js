import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./rightBar.css";
import RightBarBranch from "../rightbar-branch/rightbar-branch";

  const RightBar = (props) => {
    let branches = [
      {
        name: "Все идеи",
        items: [
          { name: "Мои идеи", link: 'fsefs' },
          { name: "Мои комментарии", link: 'fsefs' },
          { name: "Избранное", link: 'fsefs' },
          { name: "Настройка", link: 'fsefs' }
        ],
      },
      {
        name: "Популярные теги",
        items: [
          { name: "#Реклама", link: 'fsefs'},
          { name: "#Продвижение",  link: 'fsefs'},
          { name: "#Мусор",  link: 'fsefs'},
          { name: "#Автоматизация процесса",  link: 'fsefs'}
        ],
      },
      {
        name: "Последние новости",
        items: [
          { name: "Оптимизация расходов на рекламу", link: 'fsefs' },
          { name: "Оптимизация рекламы", link: 'fsefs' }
        ],
      },
    ];
    return (
      <>
        {branches.map((branch) => (
          <table>
            <tr>
            <td>
          <RightBarBranch className="table"
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
