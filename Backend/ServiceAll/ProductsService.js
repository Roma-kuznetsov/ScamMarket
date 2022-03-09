import CardProducts from '../Schem/CardProducts.js';
import FileServise from '../FileServise.js';


class ProductsService {
    async create(prodItem, picture) {
        const fileName = FileServise.saveFile(picture)
        const createdProd = await CardProducts.create({ ...prodItem, picture: fileName })
        return createdProd;
    }

    async getAll(data) {
        const skiping = data.count * data.page
        const products = await CardProducts.find().skip(skiping - data.count).limit(data.count);
        console.log(skiping)
        return products
    }

    async getOne(id) {
        const products = await CardProducts.findById(id)
        console.log(id)
        return products
    }

    async update(post) {
        if (!post._id) {
            throw new Error('id not found')
        }
        const updatedPost = await CardProducts.findByIdAndUpdate(post._id, post, { new: true })
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('id not found')
        }
        const post = await CardProducts.findByIdAndDelete(id)
        return post

    }
}



export default new ProductsService();