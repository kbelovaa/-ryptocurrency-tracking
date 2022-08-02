import "./Pagination.scss";
import React from "react";

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
            <button
              className={
                number === props.currentPage
                  ? "page__link page__link_current"
                  : "page__link"
              }
              onClick={() => props.paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
