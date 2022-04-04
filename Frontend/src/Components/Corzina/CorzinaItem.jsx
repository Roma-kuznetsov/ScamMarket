import React from "react"
import s from './Corzine.module.css'

const CorzinaItem = (props) => {
    const {picture,size,itemId,count,price} = props
    return (
        <tr>
            <td><img className={s.picture} src={picture} alt="" /> </td>
            <td>{size} </td>
            <td>{itemId}</td>
            <td>{count}</td>
            <td>{price}</td>
            <td>{price * count}</td>
        </tr>
    )
}

export default CorzinaItem
