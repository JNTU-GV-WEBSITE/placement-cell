
import React from 'react';
import './Twentyfour.css';
const Twentyfour = () => {
  return (
    <div>
     <h3 className='SP'>Students Placed [2023-2024]</h3>
      <table border="1" class="my-table">
        <thead>
          <tr>
            <th rowSpan={2}>S.No</th>
            <th rowSpan={2}>Company Name</th>
            <th>Recruitment Date</th>
            <th colSpan={7}>B.Tech</th>
            <th colSpan={5}>M.Tech</th>
            <th>MCA</th>
            <th>Total Selects</th>
            <th>Packages</th>
            <th>Sector</th>
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
            <td>TE</td>
            <td>SSP</td>
            <td>DS</td>
            <td>ADPS</td>
            <td>MST</td>
            <td>MCA</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Moschip Technologies</td>
            <td>21/22/Sep/2023</td>
            <td>-</td>
            <td>-</td>
            <td>1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>1</td>
            <td>6 LPA</td>
            <td>NON IT</td>
          </tr>
          <tr>
            <td>2</td>
            <td>L&T Constructions</td>
            <td>24-Sep-23</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>22</td>
            <td>-</td>
            <td>4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>26</td>
            <td>6 LPA to 6.25 LPA</td>
            <td>NON IT</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Pennant Technologies</td>
            <td>27-Nov-23</td>
            <td>10</td>
            <td>7</td>
            <td>1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>18</td>
            <td>4 LPA</td>
            <td>IT</td>
          </tr>
          <tr>
            <td colSpan={3}>Total</td>
            
            <td>10</td>
            <td>7</td>
            <td>2</td>
            <td></td>
            <td>22</td>
            <td></td>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>45</td>
            <td></td>
            <td></td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default Twentyfour;
