import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Branch from "../branch";
import "./leftbar.css";

const LeftBar = (props) => {
  let branches = [
    { name: "Мои предложения", link: "my-offers" },
    { name: "Обсуждения", link: "comments" },
    { name: "Избранное", link: "favorites" },
    { name: "Подписки", link: "links" },
    { name: "Достижения", link: "achives" }
  ];
  return (
    <table className="table">
      <tr>
        <td className="headerView">РАЗДЕЛЫ</td>
      </tr>
      {branches.map((branch) => (
        <tr>
          <td>
            <Branch className="headerView" name={branch.name} link={branch.link} />
          </td>
        </tr>
      ))}
    </table>
  );
};
export default LeftBar;
