import React from 'react'
import s from "./style.module.css"

export default function BlockInfo({amount,counter}) {
  return (
    <div>
        <div  className={s.info}>
          <p className={s.count}> <span> Количество выбранного товара: </span>{counter} ед.</p>
        <p className={s.amount}> <span> Общаяя сумма: </span>{amount} €</p>
        </div>
        
    </div>
  )
}
