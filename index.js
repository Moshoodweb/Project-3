import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2026;

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true, trim: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/health", (_req, res) => {
	res.status(200).json({ ok: true, message: "API is running" });
});

app.post("/register", async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		if (!firstName || !lastName || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}

		const user = await User.create({ firstName, lastName, email, password });

		return res.status(201).json({
			message: "Registration successful",
			user: {
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			},
		});
	} catch (error) {
		return res.status(500).json({ message: "Registration failed", error: error.message });
	}
});

app.post("/signin", async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "Email and password are required" });
		}

		const user = await User.findOne({ email });
		if (!user || user.password !== password) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		return res.status(200).json({
			message: "Signin successful",
			user: {
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			},
		});
	} catch (error) {
		return res.status(500).json({ message: "Signin failed", error: error.message });
	}
});

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
			console.log("Connected to MongoDB");
		});
	})
	.catch((error) => {
		console.error("MongoDB connection error:", error.message);
		process.exit(1);
	});