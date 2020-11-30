import React, { useState, useEffect } from "react";
import EmployeesList from "./components/EmployeesList";
import SelectedEmployees from "./components/SelectedEmployees";

function App() {
  const [userdata, setData] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("userdata") === null) {
      fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
        .then((response) => response.json())
        .then((result) => {
          sessionStorage.setItem('userdata', JSON.stringify(result));
          setData(result);
        })
        .catch((e) => console.error(e));
    } else {
      const restore = sessionStorage.getItem('userdata');
      setData(JSON.parse(restore));
    }
  }, []);

  function handleChange(e) {
    let userChecked = [];
    for (let i = 0; i < userdata.length; i++) {
      if (userdata[i].id === e.target.parentElement.id) {
        userChecked = userdata[i];
      }
    }
    userChecked.checked = e.target.checked;
    setData([...userdata]);
    sessionStorage.setItem('userdata', JSON.stringify(userdata));
  }

  return (
    <div className="page_parent_component">
      <div className="employees_list_component">
        <h2>Employees </h2>
        <ul className="employees_ul">
          {userdata ? (
            <EmployeesList data={userdata} handler={handleChange} />
          ) : (
            "loading..."
          )}
        </ul>
      </div>
      <div className="selected_employees_component">
        <h2 className="selected_employees_header">Employees birthday</h2>
        <ul className="selected_list">
          <SelectedEmployees data={userdata} />
        </ul>
      </div>
    </div>
  );
}

export default App;
