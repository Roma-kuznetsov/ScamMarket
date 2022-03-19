import CardProducts from '../Schem/CardProducts.js';
import regForm from '../Schem/regForm.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



class UserService {
    //work
    async create(userData) {
        const { email, password, name } = userData // получаем нужные данные из req
        const candidate = await regForm.findOne({ email }) // ищем емаил в бд 
        //если емаил уже есть в бд
        if (candidate) {
            return {
                message:`Пользователь ${email} уже зарегистрирован`,
                resaultCode:1
            }
        }
        // все хорошо сохраняем в бд
        const hashPassword = await bcrypt.hash(password, 2) // шифруем пароль
        const user = new regForm({ email, password: hashPassword, name }) // передаем в схему обязательные поля
        await user.save() // сохраняем в бд
        return {
            email:user.email, 
            password:userData.password,
            resaultCode:0
        };
    }

    async login(loginData) {
        const { email, password } = loginData
        const user = await regForm.findOne({ email })
        if (!user) {
            return{
                message:`Пользователь ${email} не найден`,
                resaultCode:1
            } 
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return{
                message:`Неверный пароль`,
                resaultCode:1
            } 
        }
        const token = jwt.sign({id:user.id},"bla_bla",{expiresIn:"48h"})
        return{
            token,
            user:{
                id:user.id,
                email:user.email,
                name:user.name,
                cart:user.cart,
                like:user.like
            }
        }
    }

    async autoAuth (data){
        try {
            const user = await regForm.findOne({ _id: data.user.id }) // ищем емаил пользователя в бд
            const token = jwt.sign({ id: user.id }, "bla_bla", { expiresIn: "48h" })// формируем новый токен
            return {  // возвращаем токен и необходирую информацию
                resaultCode:0,
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    cart: user.cart,
                    like: user.like
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    ///////
    async getAll(data) {
        const skiping = data.count * data.page
        const products = await CardProducts.find().skip(skiping - data.count).limit(data.count);
        console.log(skiping)
        return products
    }
    ///////
    async getOne(id) {
        const products = await CardProducts.findById(id)
        console.log(id)
        return products
    }
    //work
    async update(user) {
        if (!user._id) {
            throw new Error('id not found')
        }
        const updatedUser = await regForm.findByIdAndUpdate(user._id, user, { new: true })
        return updatedUser
    }

}



export default new UserService();