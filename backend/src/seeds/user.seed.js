import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const seedUsers = [
  // Female Users
  {
    email: "emma@gmail.com",
    fullName: "Emma Thompson",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "olivia@gmail.com",
    fullName: "Olivia Miller",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sophia@gmail.com",
    fullName: "Sophia Davis",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ava@gmail.com",
    fullName: "Ava Wilson",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isabella@gmail.com",
    fullName: "Isabella Brown",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "mia@gmail.com",
    fullName: "Mia Johnson",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "charlotte@gmail.com",
    fullName: "Charlotte Williams",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "amelia@gmail.com",
    fullName: "Amelia Garcia",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "james@gmail.com",
    fullName: "James Anderson",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "william@gmail.com",
    fullName: "William Clark",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "benjamin@gmail.com",
    fullName: "Benjamin Taylor",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "lucas@gmail.com",
    fullName: "Lucas Moore",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "henry@gmail.com",
    fullName: "Henry Jackson",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "alexander@gmail.com",
    fullName: "Alexander Martin",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "daniel@gmail.com",
    fullName: "Daniel Rodriguez",
    password: "$2a$10$Ki2OxKbdd4vJgz5AOXxNlO6/0nAWzBPUn8CNxxQFBK0E6fDIcv/Qe",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0);
  }
};

// Call the function
seedDatabase();
