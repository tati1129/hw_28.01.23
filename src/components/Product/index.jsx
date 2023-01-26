import React from 'react'
import s from "./style.module.css"


export default function Products({id, title, price, count, deleteProduct, changeCount}) {


  return (
    <div className={s.container}>
      <div className={s.card}>
        <p className={s.title}> <span> Наименование: </span> {title.toUpperCase()}</p>
        <p className={s.price}> <span> Цена: </span> {price} €</p>
        <p className={s.count}> <span> Количество: </span> {count} ед.</p>
        <p  className={s.amount}> <span> Сумма:  </span>{price*count}  €</p>
        <button className={s.btn} onClick={() => changeCount(id, 1) }>+1</button>
        {
          count !== 0 
          ? <button className={s.btn} onClick={() => changeCount(id, -1) }>-1</button>
          : deleteProduct(id)
        }
        <button className={s.btn} onClick={() => deleteProduct(id)}>Удалить</button>
      </div>
    </div>
     
  )
}
