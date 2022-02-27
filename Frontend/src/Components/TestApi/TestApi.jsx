import React, { useState, useEffect } from "react"
import ProductsItem from "../ProductsPage/ProductsItem";

const TestApi = (props) => {
    debugger
    const list = props.image.map(p => <ProductsItem price={p.price} image={p.image} />);

/* const [data, setdata] = useState(null)

    useEffect(() => {
        fetch('/api/posts/621510199712de1eaf7d6774')
            .then(response => response.json())
            .then(response => setdata(response.picture))
    }, [])

    const pictureStay = `http://localhost:3001/${data}`
*/
    return (
        <div>
            Компонетн ТЕСТ
            <div>
                {list}
            </div>
        </div>
    )
}


export default TestApi
//{!data ? <div>loading...</div>: <div>{data}</div>}