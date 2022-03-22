import CardProducts from '../Schem/CardProducts.js';
import FileServise from '../FileServise.js';


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
        const products = await CardProducts.find().skip(skiping - data.count).limit(data.count);
        console.log(skiping)
        return products
    }
    // получение одного продукта
    async getOne(id) {
        const products = await CardProducts.findById(id)
        console.log(id)
        return products
    }

    //получение избранного
    // принимаем лишь массив в id товаров
    async getFavoritsLoad (data){
        try{
            const favorits = await CardProducts.find({ _id: data.like })
            // возвращаем все найденые товары
            return{
                favorits
            }
        }catch(e){
            console.log(e)
        }
    }
}



export default new ProductsService();