const { ApolloServer } = require('apollo-server');
const mongoose= require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')


// const MONGODB = 'mongodb+srv://Karyna:Karina2104!@cluster0.4jq21yo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const MONGODB = 'mongodb://localhost:27017/theBookOfComments'
const server =new ApolloServer( {
    typeDefs,
    resolvers
})

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB()
server.listen({port: 5000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});