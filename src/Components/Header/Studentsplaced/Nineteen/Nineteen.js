import React, { useState } from 'react';
import '../Studentsplaced.css';

// Import data directly
import studentsPlacedData from './NineteenData'; // Adjust the path based on your project structure

const Nineteen = () => {
  const itemsPerPage = 20;

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = studentsPlacedData.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const displayStart = (currentPage - 1) * itemsPerPage;
  const displayEnd = currentPage * itemsPerPage;

  const displayedData = filteredData.slice(displayStart, displayEnd);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderTableRows = () => {
    return displayedData.map((member) => (
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

  const renderPaginationButtons = () => {
    const buttons = [];

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button key="prev" onClick={() => handlePageChange(currentPage - 1)}>
          {"<"}
        </button>
      );
    }

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
          {">"}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <h3 className='SP'>Students Placed [2018-2019]</h3>
      <div className="search-container">
        <label htmlFor="search">Search : </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div><br />
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
      </table><br />
      <div className="pagination-container">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Nineteen;
