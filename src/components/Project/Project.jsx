import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  const id = props.id;
  return (
        <Link to={`project/${id}`}>
          <div className="Block">
            <div className="BlockTitle">{props.title}</div>
          </div>
        </Link>
  )
}

export default Project
