import React from "react";
import { Link } from "react-router-dom";

const HotJob = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    company_logo,
    category,
    applicationDeadline,
    description,
    salaryRange
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={company_logo} />
        <p>{category}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p>{description}</p>
        <p>Salary Range: ${salaryRange.max}-{salaryRange.min} {salaryRange.currency}</p>
        <div className="card-actions ">
         
           
         
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">{applicationDeadline}</div>
          
        </div>
        <Link to={`/jobs/${_id}`}  className="btn btn-primary">Apply Now</Link>
      </div>
    </div>
  );
};

export default HotJob;
