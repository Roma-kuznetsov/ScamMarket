import CardProducts from '../Schem/CardProducts.js';
import regForm from '../Schem/regForm.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




class UserService {
    //создание пользователя регистрация
    async create(userData) {
        const { email, password, name } = userData // получаем нужные данные из req
        const candidate = await regForm.findOne({ email }) // ищем емаил в бд 
        //если емаил уже есть в бд
        if (candidate) {
            return {
                message: `Пользователь ${email} уже зарегистрирован`,
                resaultCode: 1
            }
        }
        // если все хорошо 
        const hashPassword = await bcrypt.hash(password, 2) // шифруем пароль
        const user = new regForm({ email, password: hashPassword, name }) // передаем в схему обязательные поля
        await user.save() // сохраняем в бд
        return {
            email: user.email,
            password: userData.password, // возвращаем не хешированый пароль чтоб сразу использовать логин на фронте
            resaultCode: 0
        };
    }
    // вход в аккаунт 
    async login(loginData) {
        const { email, password } = loginData
        const user = await regForm.findOne({ email }) // ищем пользователя с таким емайлом
        if (!user) {
            return {
                message: `Пользователь ${email} не найден`,
                resaultCode: 1
            }
        }
        // сравниваем захешированный пароль с бд с введенным
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return {
                message: `Неверный пароль`,
                resaultCode: 1
            }
        }
        //формируем токен 2 аргумент ключ 3 аргумент время жизни ключа "bla_bla"- используется в auth.middleware 
        const token = jwt.sign({ id: user.id }, "bla_bla", { expiresIn: "48h" })
        return {
            resaultCode: 0,
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                cart: user.cart,
                like: user.like
            }
        }
    }

    async autoAuth(data) {
        try {
            const user = await regForm.findOne({ _id: data.user.id }) // ищем емаил пользователя в бд
            const token = jwt.sign({ id: user.id }, "bla_bla", { expiresIn: "48h" })// формируем новый токен
            return {  // возвращаем токен и необходирую информацию
                resaultCode: 0,
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


    //добавление в избранное
    /*
    _id : передать account id
    like: передать str (id товара)
    */
    async setFav(data) {
        if (!data._id) {
            throw new Error('id not found')
        }
        try {
            const obj = await regForm.findById(data._id); // получаем объект
            // если like не пришел или пустой
            if (data.like.lenght < 1) {
                return {
                    resaultCode: 1,
                    message: "nice try"
                }
            }
            obj.like.push(data.like)  // обращаемся к массиву внутри полученого объекта и добавляем новый элемент
            console.log(obj)
            await obj.save() // сохраняем новый obj в бд
            return {
                // возвращаем не весь obj а только список внутри него
                like: obj.like,
                resaultCode: 0
            }
        } catch (e) {
            console.log(e)
        }
    }
    // удаление из избранного
    /*
    _id : передать account id
    like: передать str (id товара)
    */
    async remFav(data) {
        console.log(data)
        if (!data._id) {
            throw new Error('id not found')
        }
        try {
            const obj = await regForm.findById(data._id); // получаем объект
            // если like не пришел или пустой
            if (data.like.lenght < 1) {
                return {
                    resaultCode: 1,
                    message: "nice try"
                }
            }
            const index = obj.like.indexOf(data.like) // находим под каким индексом находится id
            // если такого id не найденно в массиве
            if (index === -1) {
                return {
                    resaultCode: 1,
                    message: "nice try"
                }
            }
            obj.like.splice(index, 1); // удалить из массива элемент с этим id второй параметр говорит сколько будет удалено элементов
            await obj.save() // сохранине изменений
            console.log(obj)
            // возвращение массива 
            return {
                resaultCode: 0,
                like: obj.like
            }
        } catch (e) {
            console.log(e)
        }
    }
    //добавление в корзину
    /*
    _id : передать account id
    cart: передать str (id товара)
    sizeCart: размер str()
    count: num()
    */
    async setCart(data) {
        try {
            const obj = await regForm.findById(data._id); // получаем объект пользователя
            const itemSizeCount = await CardProducts.findById(data.cart)
            console.log(itemSizeCount)
            // генерируем idField
            const fieldId = `f${(~~(Math.random() * 1e10)).toString(16)}`;
            // формируем объект из полученных данных
            let secyryObj = {
                itemId: data.cart,
                size: data.cartSize,
                count: data.count,
                price:data.price,
                picture:`http://localhost:3001/${data.picture}`,
                nalic:itemSizeCount[`${data.cartSize}Count`],
                fieldId
            }
            //проверяем существует ли новый объект в массиве или нет
            let fitration = obj.cart.filter(i => JSON.stringify({ itemId: i.itemId, size: i.size }) ===
                JSON.stringify({ itemId: data.cart, size: data.cartSize }))
            //если объекта в массиве нет то вернется [] length 0
            if (fitration.length > 0) {
                let idfield = fitration[0].fieldId
                let index = obj.cart.findIndex(el => el.fieldId === idfield);
                //default count = 1 
                if (data.count === 1) {
                    secyryObj.count = obj.cart[index].count + 1
                    obj.cart.push(secyryObj)
                    obj.cart.splice(index, 1); // 0 - индекс, 1 - кол-во удаляемых элементов
                    await obj.save() // сохраняем новый obj в бд
                    console.log(obj)
                    return {
                        cart: obj.cart,
                        resaultCode: 0
                    }
                }else if(data.count > 1){
                    secyryObj.count = data.count
                    obj.cart.push(secyryObj)
                    obj.cart.splice(index, 1); // 0 - индекс, 1 - кол-во удаляемых элементов
                    await obj.save() // сохраняем новый obj в бд
                    console.log(obj)
                    return {
                        cart: obj.cart,
                        resaultCode: 0
                    }
                }
            }
            obj.cart.push(secyryObj)  // обращаемся к массиву внутри полученого объекта и добавляем новый элемент
            await obj.save() // сохраняем новый obj в бд
            console.log(obj)
            return {
                cart: obj.cart,
                resaultCode: 0
            }
        } catch (e) {
            console.log(e)
        }
    }
    // удаление из корзины
    /*
    _id : передать account id
    like: передать str (id товара)
    */
    async remCart(data) {
        if (!data._id) {
            throw new Error('id not found')
        }
        try {
            const obj = await regForm.findById(data._id); // получаем объект
            const index = obj.cart.indexOf(data.cart) // находим под каким индексом находится id
            // если такого id не найденно в массиве
            if (index === -1) {
                return {
                    resaultCode: 1,
                    message: "nice try"
                }
            }
            obj.cart.splice(index, 1); // удалить из массива элемент с этим id второй параметр говорит сколько будет удалено элементов
            await obj.save() // сохранине изменений
            console.log(obj)
            // возвращение массива 
            return {
                resaultCode: 0,
                cart: obj.cart
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export default new UserService();