import React from 'react';
import '../Studentsplaced.css';
import seventeenData from './SeventeenData';

const Seventeen = () => {
  return (
    <div>
      <h3 className='SP'>Students Placed [2016-2017]</h3>
      <table border="1">
        <thead>
          <tr>
            <th rowSpan={2}>S.No</th>
            <th rowSpan={2}>Company Name</th>
            <th colSpan={7}>B.Tech</th>
            <th colSpan={1}>M.Tech</th>
            <th>Total Selections</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>CSE</td>
            <td>IT</td>
            <td>ECE</td>
            <td>EEE</td>
            <td>MECH</td>
            <td>MET</td>
            <td>MECH</td>
            <td>MECH</td>
          </tr>
          {seventeenData.map((item) => (
            <tr key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.companyName}</td>
              <td>{item.btechCSE}</td>
              <td>{item.btechIT}</td>
              <td>{item.btechECE}</td>
              <td>{item.btechEEE}</td>
              <td>{item.btechMECH}</td>
              <td>{item.btechMET}</td>
              <td>{item.mtechMECH}</td>
              <td>{item.onOffCampus}</td>
              <td>{item.totalSelections}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total</td>
            <td>35</td>
            <td>28</td>
            <td>24</td>
            <td>10</td>
            <td>4</td>
            <td>2</td>
            <td></td>
            <td>2</td>
            <td>103</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Seventeen;
