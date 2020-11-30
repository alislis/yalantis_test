import React from "react";
import customComparator from "../customComparator";
import Employee from "./Employee";

function EmployeesList(props) {
  const ALFABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    function getSort() {
    const filterCondition = 'current.lastName.charAt(0) === compareElement';
    const sorterCondition = 'a.lastName.localeCompare(b.lastName)';
    return customComparator(
      props.data,
      ALFABET,
      filterCondition,
      sorterCondition
    );
  }

  return getSort().map((arr, i) => {
    return (
      <div className="list_submassive" key={i}>
        <h3 className="litera_header"> {ALFABET[i]} </h3>
        {arr.length === 0
          ? "-----"
          : arr.map((obj, j) => {
              return (
                <li key={j} id={obj.id}>
                  <Employee data={obj} />
                  <input
                    type="checkbox"
                    defaultChecked={obj.checked}
                    onChange={props.handler}
                  />
                </li>
              );
            })}
      </div>
    );
  });
}

export default EmployeesList;
