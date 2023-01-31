"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ViewCourses = exports.AddCourse = void 0;
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var nanospinner_1 = require("nanospinner");
var classes_js_1 = require("./classes.js");
var sleep = function () { return new Promise(function (r) { return setTimeout(r, 1000); }); };
//  Add Course Function
function AddCourse(DetailsInputs, courses) {
    return __awaiter(this, void 0, void 0, function () {
        var course_name, course_timing, course_fee, course, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, DetailsInputs('', "Name")];
                case 1:
                    course_name = _a.sent();
                    return [4 /*yield*/, DetailsInputs('', "Timing")];
                case 2:
                    course_timing = _a.sent();
                    return [4 /*yield*/, DetailsInputs('number', "Fee")];
                case 3:
                    course_fee = _a.sent();
                    course = new classes_js_1.Course(course_name, course_timing, course_fee);
                    spinner = (0, nanospinner_1.createSpinner)('Adding Course').start();
                    return [4 /*yield*/, sleep()];
                case 4:
                    _a.sent();
                    courses.push(course);
                    spinner.success({ text: chalk_1["default"].greenBright("Course Added Successfully") });
                    return [2 /*return*/];
            }
        });
    });
}
exports.AddCourse = AddCourse;
// View Courses Function
function ViewCourses(courses, teachers, students) {
    return __awaiter(this, void 0, void 0, function () {
        var input, index, course, input2, choice, input3, value_1, student, spinner, input3, teacher_id_1, teacher, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!courses.length) {
                        console.log(chalk_1["default"].redBright('############ NO COURSE AVAILABLE ############'));
                        return [2 /*return*/];
                    }
                    console.table(courses.map(function (val) {
                        var _a;
                        return {
                            Name: val.name,
                            Timing: val.timing,
                            Students: val.students.length ? (_a = val.students) === null || _a === void 0 ? void 0 : _a.map(function (student) { return student.name; }).join(', ') : "No Student Enrolled",
                            Teacher: val.teacher ? val.teacher.name : "No Teacher Assigned"
                        };
                    }));
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'index',
                                message: 'Enter Index of Course to see more OPTIONS OR Any key to Exit : ',
                                type: 'number'
                            }])];
                case 1:
                    input = _a.sent();
                    return [4 /*yield*/, input['index']];
                case 2:
                    index = _a.sent();
                    if (!(index <= courses.length - 1 && index >= 0)) return [3 /*break*/, 12];
                    course = courses.at(index);
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'choice',
                                message: 'Select One',
                                type: 'list',
                                choices: ['Add Student', 'Assign Teacher', 'Exit']
                            }])];
                case 3:
                    input2 = _a.sent();
                    return [4 /*yield*/, input2['choice']];
                case 4:
                    choice = _a.sent();
                    if (choice === 'Exit') {
                        return [2 /*return*/];
                    }
                    if (!(choice === 'Add Student')) return [3 /*break*/, 8];
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'student',
                                message: 'Enter RollNo of Student: ',
                                type: 'number'
                            }])];
                case 5:
                    input3 = _a.sent();
                    return [4 /*yield*/, input3['student']];
                case 6:
                    value_1 = _a.sent();
                    student = students.find(function (val) { return val.studentID === value_1; });
                    spinner = (0, nanospinner_1.createSpinner)('Adding Student').start();
                    return [4 /*yield*/, sleep()];
                case 7:
                    _a.sent();
                    if (!student) {
                        spinner.error({ text: chalk_1["default"].redBright('############ No Student With this Roll No ############') });
                        return [2 /*return*/];
                    }
                    if (student.courses.includes(course)) {
                        spinner.error({ text: chalk_1["default"].redBright('############ Student Already Enrolled in this Course ############') });
                        return [2 /*return*/];
                    }
                    if (student.balance < course.fee) {
                        spinner.error({ text: chalk_1["default"].redBright("############ STUDENT DOESN'T HAVE ENOUGH BALANCE TO PAY FEE ############") });
                        return [2 /*return*/];
                    }
                    course === null || course === void 0 ? void 0 : course.registerStudent(student);
                    course.addCourseInStudentCourses(student);
                    spinner.success({ text: chalk_1["default"].greenBright("Student Added In Course Successfully and RS: ".concat(course.fee, " Fee Minus From Syudent's Balance")) });
                    return [2 /*return*/];
                case 8:
                    if (!(choice === 'Assign Teacher')) return [3 /*break*/, 12];
                    if (course.teacher) {
                        console.log(chalk_1["default"].redBright('############ Teacher Already Assigned to this Course ############'));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'teacher',
                                message: 'Enter ID of Teacher: ',
                                type: 'number'
                            }])];
                case 9:
                    input3 = _a.sent();
                    return [4 /*yield*/, input3['teacher']];
                case 10:
                    teacher_id_1 = _a.sent();
                    teacher = teachers.find(function (val) { return val.teacherID === teacher_id_1; });
                    spinner = (0, nanospinner_1.createSpinner)('Assigning Teacher').start();
                    return [4 /*yield*/, sleep()];
                case 11:
                    _a.sent();
                    if (!teacher) {
                        spinner.error({ text: chalk_1["default"].redBright('############ No Teacher With this ID ############') });
                        return [2 /*return*/];
                    }
                    course.setTeacher(teacher);
                    course.addCourseInTeacherCourses(teacher);
                    spinner.success({ text: chalk_1["default"].greenBright('Teacher Assigned Successfully') });
                    return [2 /*return*/];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports.ViewCourses = ViewCourses;
