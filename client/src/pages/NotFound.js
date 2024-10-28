// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'; // Optional CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">404 - Page Not Found</h2>
      <p className="not-found-message">
        Oops! The page you are looking for does not exist or might have been moved.
      </p>
      <Link to="/" className="not-found-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
