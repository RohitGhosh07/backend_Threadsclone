import mongoose from "mongoose";

const connectDB = async (MONGO_URI = "mongodb+srv://ioniccompound6:ioniccompound6@cluster0.41hsbgk.mongodb.net/threads?retryWrites=true&w=majority") => {
	try {
		// const conn = await mongoose.connect(process.env.MONGO_URI, {
		const conn = await mongoose.connect(MONGO_URI, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;