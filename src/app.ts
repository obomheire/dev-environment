import createError, { HttpError } from 'http-errors'
import express, { Request, Response, NextFunction } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './model/graphqlSchema'
import demo from './routes/demo'
import dotenv from 'dotenv'
dotenv.config()
// import { connect } from './connection/mongoConnect'
// connect()

// const posts = [

//   {
//     id: 2,
//     title: 'This course is GREAT',
//     comments: [
//       {
//         text: 'Whats up',
//         user: 'Bob'
//       }
//     ]
//   },
// ]

// const root = { 
//   hello: () => 'Hello world!.',
//   post: ({id}: any) => {
//    return posts.find(post => post.id === id)
//   },

//   name: () => ({
//     firstName: 'Zack',
//     lastName: 'Bello'
//   }),

//   posts: () =>{
//     return posts
//   }
// } // Resolver

const root = { 
  hello: () => 'Hello world!.',
  }

const app = express()

app.use('/demo', demo)

app.use(
  '/graphql',
   graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
})
)

// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// error handler
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {

  // render the error page
  res.status(err.status || 500)
  
})



export default app
