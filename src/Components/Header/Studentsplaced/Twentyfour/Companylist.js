import React from 'react';
import './Companylist.css';
import placementData from './CompanylistData'; // Import placement data

const Companylist = () => {
  return (
    <div>
      <h3 className='SP'>Students Placed [2023-2024]</h3>
      <table className="my-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Company Name</th>
            <th>Recruitment Date</th>
            <th colSpan={7}>B.Tech</th>
            <th colSpan={5}>M.Tech</th>
            <th>MCA</th>
            <th>Total Selects</th>
            <th>Packages</th>
            <th>Sector</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>CSE</th>
            <th>IT</th>
            <th>ECE</th>
            <th>EEE</th>
            <th>MECH</th>
            <th>MET</th>
            <th>CIVIL</th>
            <th>TE</th>
            <th>SSP</th>
            <th>DS</th>
            <th>ADPS</th>
            <th>MST</th>
            <th>MCA</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {placementData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.companyName}</td>
              <td>{data.recruitmentDate}</td>
              <td>{data.cse}</td>
              <td>{data.it}</td>
              <td>{data.ece}</td>
              <td>{data.eee}</td>
              <td>{data.mech}</td>
              <td>{data.met}</td>
              <td>{data.civil}</td>
              <td>{data.te}</td>
              <td>{data.ssp}</td>
              <td>{data.ds}</td>
              <td>{data.adps}</td>
              <td>{data.mst}</td>
              <td>{data.mca}</td>
              <td>{data.totalSelects}</td>
              <td>{data.packages}</td>
              <td>{data.sector}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td>13</td>
            <td>11</td>
            <td>2</td>
            <td>1</td>
            <td>31</td>
            <td></td>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>62</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Companylist;
