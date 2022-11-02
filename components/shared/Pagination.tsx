import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Pagination {
  currentPage: number;
  itemsCount: number;
}

const Pagination: React.FC<Pagination> = ({ currentPage, itemsCount }) => {
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    setPagesCount(Math.ceil(itemsCount / 30));
  }, []);

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {Array(pagesCount)
          .fill(undefined)
          .map((item, index) => (
            <li className="page-item" key={index}>
              <Link
                className={
                  currentPage - 1 === index ? "page-link active" : "page-link"
                }
                href={`/${index + 1}`}
              >
                {index + 1}
              </Link>
            </li>
          ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
