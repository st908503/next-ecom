import User from "models/User.js"
import connectDb from "/middleware/mongoose.js"


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            if (req.body.email === user.email && req.body.password === user.password) {
                res.status(200).json({ success: true, email: user.email, name: user.name })
            }
            else {
                res.status(200).json({ success: false, error: "Invalid Credentials" })
            }
        }
        else {
            res.status(200).json({ success: false, error: "No user foumd" })
        }

    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler);
