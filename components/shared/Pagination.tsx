import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Pagination {
  currentPage: number;
  itemsCount: number;
  itemsCountPerPage?: number;
  url?: string;
}

const Pagination: React.FC<Pagination> = ({
  currentPage,
  itemsCount,
  url = "",
  itemsCountPerPage = 30,
}) => {
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    setPagesCount(Math.ceil(itemsCount / itemsCountPerPage));
  }, [itemsCount]);

  return (
    <div>
      <ul className="pagination justify-content-center">
        {Array(pagesCount)
          .fill(undefined)
          .map((item, index) => (
            <li className="page-item" key={index}>
              <Link
                className={
                  currentPage - 1 === index ? "page-link active" : "page-link"
                }
                href={`${url}${index + 1}`}
              >
                {index + 1}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
