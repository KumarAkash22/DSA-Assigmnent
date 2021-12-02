const express = require("express");

const User = require("../models/user.model")

const sendMail = require("../utils/send-mail")

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

        const to_array = [
            "a@a.com",
            "b@b.com",
            "c@c.com",
            "d@d.com",
            "e@e.com",
            "f@f.com",
        ];

        const to_string = to_array.join(",")

        sendMail(
            "ROCK@mail.com",
            to_string,
            `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
            `Hi ${req.body.first_name}, Please confirm your email address`,
            "<h1>Created a new User</h1>"
        );

        return res.status(201).json({user});
    } catch (e) {
        return res.send(500).json({ status: "failed", message: e.message });
    }
})

router.get("/", async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 2;

        //if page == 1 skpi(0)  limit(2) // (1-1)*2 = 0
        //if page == 2 skpi(2)  limit(2) // (2-1)*2 = 2
        
        const skip = (page - 1) * size;

        const users = await User.find().skip(skip).limit(size).lean().exec();

        const totalPages = Math.ceil(
            (await User.find().countDocuments()) / size
        );

        return res.send( {users, totalPages});
    } catch (e) {
        return res.send(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;