import express from "express"
import ordersRoutes from './routes/order.router'
import registerRoutes from './routes/register.router'

const app = express()

app.set('port', 3009)

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: ""})
})

app.post('/', (req, res)=>{
    res.json({message: ""})
});

app.use('/api/orders', ordersRoutes) // localhost:3000/api/orders

app.use('/api/register', registerRoutes)



export default app