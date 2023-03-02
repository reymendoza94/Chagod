import { ApolloServer, gql } from "apollo-server"
const books = [
    {
        id: '1',
        titulo: 'A Song of Ice and Fire',
        author: 'George R. R. Martin',
        ISBN: '',
        description: '',
        fron_page: '',
        year: ''
    }
]

const authors = [
    {
        id: '1',
        name:'George R',
        last_name:'R. Martin',
        extract: '',
        bithday: '',
        photo: ''
    }
]

const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        last_name: String!
        extract: String!
        bithday: String!
        photo: String
    }

    type Query {
        authorCount: Int!
        allAuthors: [Author]!
    }
`
const resolvers = {
    Query: {
        authorCount: () => authors.length,
        allAuthors: () => authors
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers   
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})