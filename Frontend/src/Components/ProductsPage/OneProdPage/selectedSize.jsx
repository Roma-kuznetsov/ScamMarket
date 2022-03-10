import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const SelectedSizeItem = () => {
    //map <SelectItem/>
    let sizes = ['XXS','XS','S','M','L','XL','XXL']

    return (
        <div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={3}>
                <ToggleButton id="tbg-radio-1" value={1}>
                XXS
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                XS
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>
                S
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" value={4}>
                M
                </ToggleButton>
                <ToggleButton id="tbg-radio-5" value={5}>
                L
                </ToggleButton>
                <ToggleButton id="tbg-radio-6" value={6}>
                XL
                </ToggleButton>
                <ToggleButton id="tbg-radio-7" value={7}>
                XXL
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default SelectedSizeItem;