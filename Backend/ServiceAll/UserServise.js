import CardProducts from '../Schem/CardProducts.js';
import regForm from '../Schem/regForm.js';


class UserService {
    //work
    async create(userData) {
        const createdUser = await regForm.create(userData)
        console.log("Created User")
        return createdUser;
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