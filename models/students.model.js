const {v4 : uuidv4} = require("uuid");

const students = [
    {
        id: uuidv4(),
        name : "ratul",
        class : "12",
        email : "ratul@gmail.com"
    },
    {
        id: uuidv4(),
        name : "rafi",
        class : "11",
        email : "rafi@gmail.com"
    },
];

exports.students = students;