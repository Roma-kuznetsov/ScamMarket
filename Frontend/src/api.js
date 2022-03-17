import axios from "axios"


export const productsAPI = {
    getTShirt(currentPage = 1, pageSize = 16) {
        return fetch(`/api/productstshirt?count=${pageSize}&page=${currentPage}`)
            .then(response => response.json())
            .then(response => response)
    },

    getOneTShirt(itemId) {
        return fetch(`/api${itemId}`)
            .then(response => response.json())
            .then(response => response)
    }
}

export const auth = async (email,password,name) =>{
    try{
        const response = await axios.post("http://localhost:3001/api/createuser",{
            email,
            password,
            name
        })
        console.log(response.data.message)
        alert(response.data.message)
        alert(response.data)
    }catch(e){
        alert(e.response.data.message)
    }


}
