import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from '~/services/database.services'
import defaultErrorhandler from './middlewares/error.middleware'

const app = express()
const port = 4000

app.use(express.json())

app.use('/users', usersRouter)

app.use(defaultErrorhandler)

databaseService.connect()
app.listen(port, () => {
  console.log(`Sever on RUNNING on port ${port}`)
})
