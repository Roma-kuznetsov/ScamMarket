import UserService from "../ServiceAll/UserServise.js";



class UserController {
    //регистация
    async create(req, res) {
        try {
            const userData = await UserService.create(req.body)
            res.status(200).json(userData)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    //логинизация
    async login(req, res) {
        try {
            const loginData = await UserService.login(req.body)
            res.json(loginData)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

   // логинизация с помощью ключа
    async autoAuth(req,res){
        try{
            const autoAuth = await UserService.autoAuth(req)
            res.json(autoAuth)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    // добавление в избранное
    async setFav(req,res){
        try{
            const favorits = await UserService.setFav(req.body)
            res.json(favorits)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    // удаление из избранного
    async removeFav(req,res){
        try{
            const favorits = await UserService.remFav(req.body)
            res.json(favorits)
        }catch(e){
            res.status(500).json(e.message)
        }
    }

}

export default new UserController()