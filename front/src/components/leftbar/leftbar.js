import React from "react";
import Branch from "../branch";
import "./leftbar.css";

const LeftBar = (props) => {
  let branches = [
    { name: "Мои предложения", link: "my-offers" },
    { name: "Обсуждения", link: "comments" },
    { name: "Избранное", link: "favorites" },
    { name: "Подписки", link: "links" },
    { name: "Достижения", link: "achives" },
  ];
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="headerView">РАЗДЕЛЫ</td>
        </tr>
        {branches.map((branch) => (
          <tr key={branch.name}>
            <td>
              <Branch
                className="headerView"
                name={branch.name}
                link={branch.link}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default LeftBar;
