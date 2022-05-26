import { useState } from "react";
import style from "./Users.module.css";

const Paginator = ({totalItemsCount, pageSize, onPageChange, currentPage, portionSize = 5}) => {

  let pagesCount = Math.ceil(
    totalItemsCount / pageSize
  );
  
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={style.pages}>
    {portionNumber > 1 &&
    <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
    {pages
    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
    .map((page) => {
      return (
        <span
          className={
            currentPage === page
              ? style.selectedPage
              : style.pageCounter
          }
          key={page}
          onClick={() => {
            onPageChange(page);
          }}
        >
          {page}
        </span>
      );
    })}
    {portionCount > portionNumber &&
    <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
  </div>
  )
};

export default Paginator;
