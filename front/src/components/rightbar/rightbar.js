import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightBarBranch from "../rightbar";

const RightBar = (props) => {
  let branches = [
    {
      name: "Все идеи",
      items: [
        { name: "Мои идеи" },
        { name: "Мои комментарии" },
        { name: "Избранное" },
        { name: "Настройка" },
      ],
    },
    {
      name: "Тенденции",
      items: [
        { name: "#Реклама" },
        { name: "#Продвижение" },
        { name: "#Мусор" },
        { name: "#Автоматизация процесса" },
      ],
    },
    {
      name: "Последние новости",
      items: [
        { name: "Оптимизация расходов на рекламу" },
        { name: "Оптимизация рекламы" },
      ],
    },
  ];
  return (
    <>
      {branches.map((branch) => (
        <RightBarBranch
          name={branch.name}
          items={branch.items}
        ></RightBarBranch>
      ))}
    </>
  );
};

export default RightBar;
