import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = ({ currenciesPerPage, totalCurrencies, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCurrencies / currenciesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page" key={number}>
            <Link
              to={`/${number}`}
              className={number === Number(currentPage) ? 'page__link page__link_current' : 'page__link'}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
