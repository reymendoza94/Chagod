import { ApolloServer, gql } from "apollo-server"
import {v1 as uuid} from 'uuid'
const books = [
    {
        id: '1',
        titulo: 'Game of Thrones',
        author: '',
        ISBN: '',
        description: '',
        fron_page: '',
        year: ''
    },

    {
        id: '2',
        titulo: 'Clash of Kings',
        author: '',        
        ISBN: '',
        description: '',
        fron_page: '',
        year: ''
    },

    {
        id: '3',
        titulo: 'Dance of Dragons',
        author: '',
        ISBN: '',
        description: '',
        fron_page: '',
        year: ''
    },

    {
        id: '4',
        titulo: 'Harry Potter and the Philosopher Stone',
        author: '',
        ISBN: '',
        description: '',
        fron_page: '',
        year: ''
    },

    {
        id: '5',
        titulo: 'Harry Potter and the Deathly Hallows',
        author: '',
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
        birthday: '',
        photo: ''
    },

    {
        id: '2',
        name:'J. K.',
        last_name:'Rowling',
        extract: '',
        birthday: '',
        photo: ''
    }
]

const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        last_name: String!
        extract: String!
        birthday: String!
        photo: String
    }

    type Query {
        authorCount: Int!
        allAuthors: [Author]!
    }

    type Mutation {
        addAuthor(
            name: String!
            last_name: String!
            extract: String!
            birthday: String!
            photo: String
        ): Author

        editAuthor(
            id: ID!
            name: String!
        ): Author
    }
`
const resolvers = {
    Query: {
        authorCount: () => authors.length,
        allAuthors: () => authors
    },

    Mutation: {
        addAuthor: (root, args) => {
            const author = { ...args, id: uuid()}
            authors.push(author)
            return author
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,   
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})