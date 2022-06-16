import { useEffect, useState } from "react";
import { getCurrentRate } from "../../api/api";
import { IRate } from "../../interfaces/rate";
import './CurrentInfo.css';




type Props = {
  allRate: IRate[];
}

export const CurrentInfo: React.FC<Props> = ({ allRate }) => {

  return (
    <>
      <ul className="currency-list">
        {allRate.map((el: IRate) => (
          <li key={el.ccy}>
            <span><b>{el.ccy}</b></span>
            <span>{Number(el.buy).toFixed(2)}</span>
            <span>{Number(el.sale).toFixed(2)}</span>
          </li>
          ))
        }
      </ul>
    </>
  )
}