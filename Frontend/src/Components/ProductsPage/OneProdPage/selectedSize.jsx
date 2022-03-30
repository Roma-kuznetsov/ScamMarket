import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const SelectedSizeItem = (props) => {
    return (
        <div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={3}>
                <ToggleButton onClick={()=>{props.setSize('xxs')}} id="tbg-radio-1" value={"XXS"} disabled = {props.selectedItem.xxsCount === 0? true : false} >
                XXS
                </ToggleButton>
                <ToggleButton onClick={()=>{props.setSize('xs')}} id="tbg-radio-2" value={"XS"}disabled = {props.selectedItem.xsCount === 0? true : false}>
                XS
                </ToggleButton>
                <ToggleButton onClick={()=>{props.setSize('s')}} id="tbg-radio-3" value={"S"}disabled = {props.selectedItem.sCount === 0? true : false}>
                S
                </ToggleButton>
                <ToggleButton onClick={()=>{props.setSize('m')}} id="tbg-radio-4" value={"M"}disabled = {props.selectedItem.mCount === 0? true : false}>
                M
                </ToggleButton>
                <ToggleButton onClick={()=>{props.setSize('l')}} id="tbg-radio-5" value={"L"}disabled = {props.selectedItem.lCount === 0? true : false}>
                L
                </ToggleButton>
                <ToggleButton onClick={()=>{props.setSize('xl')}} id="tbg-radio-6" value={"XL"}disabled = {props.selectedItem.xlCount === 0? true : false}>
                XL
                </ToggleButton>
                <ToggleButton onClick={()=>{props.setSize('xxl')}} id="tbg-radio-7" value={"XXL"}disabled = {props.selectedItem.xxlCount === 0? true : false}>
                XXL
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default SelectedSizeItem;