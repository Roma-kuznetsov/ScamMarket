import PostServese from "../ServiceAll/PostServese.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostServese.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostServese.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostServese.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostServese.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostServese.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()