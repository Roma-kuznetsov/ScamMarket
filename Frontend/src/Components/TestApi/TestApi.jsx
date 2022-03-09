import React, { useState, useEffect } from "react"
//import ProductsItem from "../ProductsPage/ProductsItem/ProductsItem";

const TestApi = (props) => {
    debugger
    const arr =[]

    const[data,setdata] = useState(null)
    useEffect(() => {
        fetch('/api/productstshirt?count=1&page=6')
        .then( response =>  response.json())
        .then( response => setdata(response.picture))
    }, [])

    return (
        <div>
            <div>
                {data}
            </div>
        </div>
    )
}


export default TestApi
//{!data ? <div>loading...</div>: <div>{data}</div>}