import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response)=>{
    // res.send({Message: 'Hello World'})
    res.send('Hello World')
} )

export default router