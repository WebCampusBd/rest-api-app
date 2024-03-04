const router = require("express").Router();
const { allStudents, registerStudent, loginStudent, updateDataForm, updateStudentData, deleteStudentData, deleteStudentForm } = require("../controllers/students.controller");


router.get("/all", allStudents);
router.get("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/update/data", updateDataForm);
router.post("/update/data", updateStudentData);
router.get("/delete/account", deleteStudentForm);
router.post("/delete/account", deleteStudentData);



exports.studentsRoute = router;