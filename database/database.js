import mongoose from "mongoose";
async function connect() {
    try {
        let connection = await mongoose.connect(process.env.connectionStr)
        console.log("Connect mongoose successfull")
    } catch (error) {
        debugger
        throw new Error("Cannot connect to MongoDB")
    }
}
export default connect
connect()