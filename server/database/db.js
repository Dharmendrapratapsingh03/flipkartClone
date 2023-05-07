import mongoose from "mongoose";


export const Connection = async(username, password) => {
    const URL = `mongodb+srv://dharmendra:2333906@cluster0.2brmcr1.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true,useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch(error){
        console.log(error);
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;