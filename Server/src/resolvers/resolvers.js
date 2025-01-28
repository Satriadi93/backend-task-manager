import userResolver from "./userresolver.js";
import taskResolver from "./taskresolver.js";

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...taskResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
    ...taskResolver.Mutation,
  },
};

export default resolvers;
