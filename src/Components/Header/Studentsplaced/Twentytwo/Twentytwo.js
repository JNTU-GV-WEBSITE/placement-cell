import React from 'react';
import '../Studentsplaced.css';

// Import data directly
import studentsPlacedData from './TwentytwoData'; // Adjust the path based on your project structure

const Twentytwo = () => {
  // Use the imported data directly
  const studentsPlaced = studentsPlacedData ;

  // Render table rows
  const renderTableRows = () => {
    return studentsPlaced.map((member) => (
      <tr key={member.sno}>
        <td>{member.sno}</td>
        <td>{member.name}</td>
        <td>{member.rollnumber}</td>
        <td>{member.branch}</td>
        <td>{member.passingyear}</td>
        <td>{member.campus}</td>
        <td>{member.company}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h3 className='SP'>Students Placed [2021-2022]</h3>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Student</th>
            <th>Roll Number</th>
            <th>Branch</th>
            <th>Year of passing</th>
            <th>On/Off campus</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Twentytwo;
