import React from 'react';
import '../Studentsplaced.css';
import studentsPlacedData from './SixteenData'; // Adjust the path based on your project structure

const Sixteen = () => {
  return (
    <div>
      <h3 className='SP'>Students Placed [2015-2016]</h3>
      <table border="1">
        <thead>
          <tr>
            <th rowSpan={2}>S.No</th>
            <th rowSpan={2}>Company Name</th>
            <th>Recruitment Date</th>
            <th colSpan={7}>B.Tech</th>
            <th colSpan={2}>M.Tech</th>
            <th>On/Off campus</th>
            <th>Total Selections</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>CSE</td>
            <td>IT</td>
            <td>ECE</td>
            <td>EEE</td>
            <td>MECH</td>
            <td>MET</td>
            <td>CIVIL</td>
            <td>CSE</td>
            <td>IT</td>
            <td></td>
            <td></td>
          </tr>
          {studentsPlacedData.map((record) => (
            <tr key={record.sno}>
              <td>{record.sno}</td>
              <td>{record.companyName}</td>
              <td>{record.recruitmentDate}</td>
              <td>{record.btechCSE}</td>
              <td>{record.btechIT}</td>
              <td>{record.btechECE}</td>
              <td>{record.btechEEE}</td>
              <td>{record.btechMECH}</td>
              <td>{record.btechMET}</td>
              <td>{record.btechCIVIL}</td>
              <td>{record.mtechCSE}</td>
              <td>{record.mtechIT}</td>
              <td>{record.onOffCampus}</td>
              <td>{record.totalSelections}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total</td>
            <td>22</td>
            <td>15</td>
            <td>24</td>
            <td>10</td>
            <td>20</td>
            <td>7</td>
            <td></td>
            <td>0</td>
            <td>2</td>
            <td></td>
            <td>101</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sixteen;
