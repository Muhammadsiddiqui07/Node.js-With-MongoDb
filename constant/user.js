import express from 'express'
import User from '../modal/user.js'

const router = express.Router()

const user = [
    {
        name: 'Muhammad',
        email: 'muhammad@gmail.com'
    },
    {
        name: 'Ali',
        email: 'ali@gmail.com'
    },
    {
        name: 'Aliyan',
        email: 'aliyan@gmail.com'
    },
    {
        name: 'Raahim',
        email: 'raahim@gmail.com'
    }
]

router.get('/', (req, res) => {
    res.status(200).send({ Users: user })
})

router.post('/send', async (req, res) => {
    try {
        const u = new User(req.body)
        await u.save()
        return res.status(200).send({ message: 'User Added Successfully!' })
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
})



export default router;