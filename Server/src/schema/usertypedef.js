const userTypeDef = `#graphql
    type User {
        id: ID!
        username: String!
        password: String!
        tasks: [Task!]
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        register(username: String!, password: String!): ResponseMessage
        login(username: String!, password: String!): String
        logout: ResponseMessage
    }

    type ResponseMessage {
        message: String!
    }
`;

export default userTypeDef;
