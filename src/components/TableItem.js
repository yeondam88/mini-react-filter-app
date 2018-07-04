import React from "react";

const TableItem = ({ standing, searchTerm }) => {
  return standing
    .filter(s => {
      return s.teamName.toLowerCase().includes(searchTerm);
    })
    .map(s => {
      return (
        <tr>
          <td className="small center">{s.position}</td>
          <td className="medium">
            <img src={s.crestURI} alt="" />
          </td>
          <td className="large">{s.teamName.replace("FC", "")}</td>
          <td className="medium center">{s.points}</td>
          <td className="medium center">
            {s.goalDifference > 0 ? (
              <i>+{s.goalDifference}</i>
            ) : (
              s.goalDifference
            )}
          </td>
        </tr>
      );
    });
};

export default TableItem;
