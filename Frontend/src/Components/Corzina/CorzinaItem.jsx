import React from "react"
import s from './Corzine.module.css'
import {BsFillTrashFill} from "react-icons/bs"
import { Button } from "react-bootstrap"

const CorzinaItem = (props) => {
    const {picture,size,itemId,count,price,fieldId} = props
    return (
        <tr >
            <td className={s.flex}><img className={s.picture} src={picture} alt="" /> 
            <Button variant="danger" onClick={()=>{props.removeCart(fieldId)}}><BsFillTrashFill size={13} /></Button> </td>
            <td className={s.td} >{size} </td>
            <td>{itemId}</td>
            <td>{count}</td>
            <td>{price}</td>
            <td>{price * count}</td>
        </tr>
    )
}

export default CorzinaItem
