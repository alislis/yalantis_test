import React from "react";

export default function Employee(props) {
  return (
    <span>
      {props.data.lastName}&nbsp;{props.data.firstName}
    </span>
  );
}
