import express from 'express'
import cors from 'cors'


const app = express()

app.use(cors())
app.get('/aaa', (req, res) => { res.send('Prueba') })
app.listen(1112, () => console.log('Server running on port 1112'))

