import "./Pagination.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalCurrencies / props.currenciesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page" key={number}>
            <Link
              to={`/${number}`}
              className={
                number === Number(props.currentPage)
                  ? "page__link page__link_current"
                  : "page__link"
              }
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
