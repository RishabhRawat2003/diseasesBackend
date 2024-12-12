import { User } from '../models/user.model.js'

export const createUser = async (req, res) => {
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        return res.status(404).json({ error: "All Fields are required" })
    }

    const user = await User.create(
        {
            name,
            email,
            number: phone
        }
    )

    if (!user) {
        return res.status(404).json({ error: "Failed to create user" })
    }

    return res
        .status(200)
        .json({ message: "User created successfully", user })

}