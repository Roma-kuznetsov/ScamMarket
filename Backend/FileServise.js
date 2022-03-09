import *as uuid from 'uuid'
import *as path from 'path'

class FileServise {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('static', fileName)
            //const filePathProducts = psth.resolve('static/products',fileName)
            file.mv(filePath)
            //file.mv(filePathProducts)
            return fileName
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileServise();