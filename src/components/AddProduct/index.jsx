import React from 'react'
import s from "./style.module.css"

export default function AddProduct({createProduct, deleteAll}) {
    const onSubmit = event => {
        event.preventDefault();
        const {title, price, count} = event.target;
        createProduct(title.value, price.value, count.value);
        title.value = '';
        price.value = '';
        count.value = '';
    }

  return (

      <form  className={s.form_input} onSubmit={(onSubmit)}>
        <input className={s.inputTitle} type="text" placeholder='название' name='title'/>
        <input className={s.inputPrice} type="Number" placeholder='цена' name='price'/>
        <input className={s.inputCount} type="Number" placeholder='количество' name='count'/>
        <button className={s.form_btn}>Добавить</button>
      </form>
      


  )
}
