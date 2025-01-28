const taskTypeDef = `#graphql
    type Task {
        task_id: ID!
        title: String!
        task_duedate: String!
        task_status: String!
        description: String!
        user_id: String!
        user: User!
    }

    type Query {
        getTasks: [Task]
        getTaskDetail(task_id: ID!): Task
        tasksByTitle(title: String!): [Task!]!
    }

    type Mutation{
        createTask(title: String!, task_duedate: String!, task_status: String!, description: String!, user_id: String! ) : ResponseMessage
        updateTask(task_id: ID!, title: String!, task_duedate: String!, task_status: String!, description: String!, user_id: String ) : ResponseMessage
        deleteTask(task_id: ID!): ResponseMessage
    }

    type ResponseMessage {
        message: String!
    }
`;

export default taskTypeDef;