import express from 'express'
const router = express.Router()
router.get('/', (req, res) => {
    res.send("GET user")
})

router.post('/login', (req, res) => {
    res.send('POST login user')
})

router.post('/register', (req, res) => {
    res.send('POSt register user')
})

export default router