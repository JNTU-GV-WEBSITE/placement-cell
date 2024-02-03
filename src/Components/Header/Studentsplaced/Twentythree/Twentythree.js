import React from 'react';
import './Twentythree.css';
import twentythreeData from './TwentythreeData';

const Twentythree = () => {
  return (
    <div>
      <h3 className='SP'>Students Placed [2022-2023]</h3>
      <table border="1" className='twentythree'>
        <thead>
          <tr>
            <th rowSpan={2}>S.No</th>
            <th rowSpan={2}>Company Name</th>
        
            <th colSpan={7}>B.Tech</th>
            <th>MCA</th>
            
          
            <th>Total Selections</th>
            <th>Packages</th>
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
            <td>CIVIL</td>
            <td>MCA</td>
            <td></td>
            <td></td>
          </tr>

          {twentythreeData.map((data) => (
            <tr key={data.sno}>
              <td>{data.sno}</td>
              <td>{data.companyName}</td>
              <td>{data.btechCSE}</td>
              <td>{data.btechIT}</td>
              <td>{data.btechECE}</td>
              <td>{data.btechEEE}</td>
              <td>{data.btechMECH}</td>
              <td>{data.btechMET}</td>
              <td>{data.btechCIVIL}</td>
              <td>{data.mca}</td>
              <td>{data.totalSelections}</td>
              <td>{data.packages}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Twentythree;
