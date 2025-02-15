import connectDB from '../../../utils/connectDB'
import User from '../../../models/userModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "PATCH":
            await upload(req, res)
            break;
    }
}

const upload = async (req, res) => {
    try {
        const result = await auth(req, res)
        const { name, avatar } = req.body
        const newUser = await User.findOneAndUpdate({ _id: result.id }, { name, avatar })
        res.json({
            msg: "Update Success",
            user: {
                name, avatar,
                email: newUser.email,
                role: newUser.role
            }
        })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}