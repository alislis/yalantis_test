import React from "react";
import customComparator from "../customComparator";
import Employee from "./Employee";

function SelectedEmployyes(props) {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const MONTHNUM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const getCheckedUsers = () => {
    let checkeduser = [];
    const users = props.data ? props.data : [];
    users.forEach((user) => {
      if (user.checked) {
        user.mob = new Date(user.dob).getMonth();
        checkeduser.push(user);
      }
    });
    return getSortChecked(checkeduser);
  };

  function getSortChecked(userList) {
    const filterCondition =
      "new Date (current.dob).getMonth() === compareElement";
    const sorterCondition =
      "new Date (a.dob).getDate() > new Date (b.dob).getDate() ? 1 : -1";
    return customComparator(
      userList,
      MONTHNUM,
      filterCondition,
      sorterCondition
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return getCheckedUsers().length === 0 ? (
    <div className="selected_submassive">No selected employees</div>
  ) : (
    getCheckedUsers().map((arr, i) => {
      return arr.length === 0 ? null : (
        <div className="selected_submassive" key={i}>
          <h3 className="month_header"> {MONTHS[i]} </h3>
          {arr.map((usr, j) => {
            return (
              <li key={j} id={usr.id}>
                <Employee data={usr} />  -  {formatDate(usr.dob)}
              </li>
            );
          })}
        </div>
      );
    })
  );
}

export default SelectedEmployyes;
