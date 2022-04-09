import CardProducts from '../Schem/CardProducts.js';
import FileServise from '../FileServise.js';
import regForm from '../Schem/regForm.js';


class ProductsService {
    // создание продукта
    async create(prodItem, picture) {
        const fileName = FileServise.saveFile(picture)
        const createdProd = await CardProducts.create({ ...prodItem, picture: fileName })
        return createdProd;
    }

    // получение всех продуктов 
    async getAll(data) {
        const skiping = data.count * data.page // нужное кол-во пользователей * номер страницы
        const products = await CardProducts.find({ type: data.type }).skip(skiping - data.count).limit(data.count);
        const count = await CardProducts.find({ type: data.type }).count()
        console.log(skiping)
        return {
            products,
            count
        }
    }
    // получение одного продукта
    async getOne(id) {
        const products = await CardProducts.findById(id)
        return products
    }

    //получение избранного
    // принимаем id пользователя в query параметре
    async getFavoritsLoad(data) {
        console.log(data)
        try {
            const skiping = data.count * data.page
            // получаем пользователя 
            const favoritsUser = await regForm.findById(data.id)
            //получение count
            const count = favoritsUser.like.length
            //делаем запрос по всем id которые хранятся у этого пользователя в like
            const favorits = await CardProducts.find({ _id: favoritsUser.like })
                .skip(skiping - data.count).limit(data.count);
            return {
                resaultCode: 0,
                count,
                favorits
            }
        } catch (e) {
            return {
                message: "id not found",
                resautCode: 1
            }
        }
    }
}



export default new ProductsService();