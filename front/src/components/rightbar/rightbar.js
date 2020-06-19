import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './rightbar.css';
import Branch from "../branch";



const RightBar = (props) => {
    let branches = [{name: 'Топ идей', link: 'Самые новые'}, {name: 'Самые новые', link: 'fds'}, {name: 'Популярное', link: 'fds'}, {name: 'Реализованные', link: 'fавыаываds'}, {name: 'Достижения', link: 'fds'}];
      return (
      <table className="table">
        <tr><td className ='headerView'>
          BCE ИДЕИ
        </td></tr>
        { branches.map(branch => <tr>
      <td>
        <Branch name={branch.name} link = {branch.link}/>
      </td>
    </tr>
        )
        }
      </table>);
  ;
  };

export default RightBar;