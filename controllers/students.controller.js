const path = require("path");
const {v4 : uuidv4} = require("uuid");
let {students} = require("../models/students.model");


exports.allStudents = (req,res)=>{
    res.status(200).send({
        message : "all students data",
        students
    });
};

exports.registerStudent = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/register.students.html"));
};
exports.loginStudent = (req,res)=>{
    const newStudent = {
        id: uuidv4(),
        name : req.body.name,
        class : req.body.class,
        email : req.body.email
    };
    students.push(newStudent);
    res.status(201).send({
        message : "Register Successfully",
        newStudent,
        students
    });
};

exports.updateDataForm = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/updatedata.students.html"));
};
exports.updateStudentData = (req,res)=>{
    const id = req.body.id;
    const {name, email, className  } = req.body;

    const selectedStudent = students.filter((student) =>{
        return student.id === id ;
    }).map((selectedStudent)=>{
        selectedStudent.name = name;
        selectedStudent.email = email;
        selectedStudent.class = className;
        return selectedStudent;
    });

    res.status(200).send({
        message : "Updated Successfully",
        updateData : selectedStudent[0],
        all_students : students
    });
};


exports.deleteStudentForm = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/deleteaccount.student.html"));
};
exports.deleteStudentData = (req,res)=>{
    const id = req.body.id;

    const deleteData = students.filter((student) =>{
        return student.id === id ;
    });
    students = students.filter((student) =>{
        return student.id !== id ;
    });


    res.status(200).send({
        message : "deleted Successfully",
        deleteData: deleteData[0],
        all_students : students
    });
};