import userTypeDef from "./usertypedef.js";
import taskTypeDef from "./tasktypedef.js";

const typeDefs = `#graphql
    ${userTypeDef},
    ${taskTypeDef}
    
`;

export default typeDefs;
