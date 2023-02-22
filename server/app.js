import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    console.log("Good Working..🔥")
    return res.status(200).json({ message: 'Good Working..🔥' });
})

app.listen(3000, () => console.log(`🚀 Server ready at: PORT 3000`),)