import CardProducts from '../Schem/CardProducts.js';
import regForm from '../Schem/regForm.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class UserService {
    //work
    async create(userData) {
        const { email, password, name } = userData
        const candidate = await regForm.findOne({ email })
        if (candidate) {
            return {
                status:301,
                message:`Пользователь ${email} уже существует`
            }
        }
        const hashPassword = await bcrypt.hash(password, 2)
        const user = new regForm({ email, password: hashPassword, name })
        await user.save()
        return {
            email:user.email,
            name: user.name,
            cart:user.cart,
            like:user.like

        };
    }

    async login(loginData) {
        const { email, password } = loginData
        const user = await regForm.findOne({ email })
        if (!user) {
            return `User ${email} not found`
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return "Invalid password"
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