import React,{useState} from "react"
import s from './Corzine.module.css'
import { BsFillTrashFill } from "react-icons/bs"
import { Button } from "react-bootstrap"

const CorzinaItem = (props) => {
// можно передавать параметром method и не писать второй раз но кому это надо
    const buttonMinCount = () => {
        if (props.count === 1) {
            return false
        } else {
            props.updateCart(props.fieldId,props.count-1)
        }
    }
    const buttonMaxCount = () => {
        if (props.count === props.nalic) {
            return false
        } else {
            props.updateCart(props.fieldId,props.count+1)
        }
    }
    return (
        <tr>
            <td className={s.flex}><img className={s.picture} src={`https://serene-thicket-20705.herokuapp.com/${props.picture}`} alt="" />
                <Button size="sm" variant="danger" onClick={() => { props.removeCart(props.fieldId) }}><BsFillTrashFill size={13} /></Button> </td>
            <td className={s.td} >{props.size} </td>
            <td>{props.itemId}</td>
            <td >
                <div className={s.flexCount}>
                    <Button disabled={props.inProcces} onClick={()=>{buttonMinCount()}} size="sm" variant="primary">-</Button>
                    <div className={s.pad}>
                        {props.count}
                    </div>
                    <Button disabled={props.inProcces} onClick={()=>{buttonMaxCount()}} size="sm" variant="primary" >+</Button>
                </div>
                <p>В наличии {props.nalic}</p>
            </td>
            <td>{props.price}$</td>
            <td>{props.price * props.count}$</td>
        </tr>
    )
}

export default CorzinaItem
