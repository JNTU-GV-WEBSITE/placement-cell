import React, { useState } from 'react';
import CompanyList from './Companylist';
import StudentsPlaced from './Studentsplaced';
import './Twentyfour.css'; // Import the CSS file

const Twentyfour = () => {
  const [displayCompanyList, setDisplayCompanyList] = useState(true);
  const [displayStudentsPlaced, setDisplayStudentsPlaced] = useState(false);

  const handleCompanyDetailsClick = () => {
    setDisplayCompanyList(true);
    setDisplayStudentsPlaced(false);
  };

  const handleStudentsPlacedClick = () => {
    setDisplayCompanyList(false);
    setDisplayStudentsPlaced(true);
  };

  return (
    <div>
      <div className="button-container">
        <button className={displayCompanyList ? 'active' : ''} onClick={handleCompanyDetailsClick}>Company Details</button>
        <button className={displayStudentsPlaced ? 'active' : ''} onClick={handleStudentsPlacedClick}>Students Placed List</button>
      </div>
      {displayCompanyList && <CompanyList />}
      {displayStudentsPlaced && <StudentsPlaced />}
    </div>
  );
};

export default Twentyfour;
