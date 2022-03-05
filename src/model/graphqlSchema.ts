import { graphql, buildSchema } from "graphql";

// export const schema = buildSchema(`
//     type Query{
//         hello: String
//         post(id: Int!): Post
//         name: Name
//         posts: [Post]
//     }

//     type Post{
//         id: Int
//         title: String
//         comments: [Comment]
//     }

//     type Comment{
//         text: String
//         user: String
//     }

//     type Name{
//         firstName: String
//         lastName: String
//     }
// `)

export const schema = buildSchema(`
    type Query{
        hello: String
    }
`)