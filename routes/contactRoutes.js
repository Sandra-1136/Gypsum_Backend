import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// 🟢 Add new contact
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, city, message } = req.body;

    const contact = new Contact({
      name,
      email,
      mobile,
      city,
      message,
    });

    await contact.save();
    res.status(201).json({ success: true, contact });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// 🟡 Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
