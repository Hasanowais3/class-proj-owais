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
exports.ViewStudents = exports.AddStudent = void 0;
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var nanospinner_1 = require("nanospinner");
var classes_js_1 = require("./classes.js");
var sleep = function () { return new Promise(function (r) { return setTimeout(r, 1000); }); };
// Add Student Function
function AddStudent(DetailsInputs, students) {
    return __awaiter(this, void 0, void 0, function () {
        var name, age, student, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, DetailsInputs('', 'Name')];
                case 1:
                    name = _a.sent();
                    return [4 /*yield*/, DetailsInputs('number', 'Age')];
                case 2:
                    age = _a.sent();
                    student = new classes_js_1.Student(name, age);
                    spinner = (0, nanospinner_1.createSpinner)('Adding Student').start();
                    return [4 /*yield*/, sleep()];
                case 3:
                    _a.sent();
                    students.push(student);
                    spinner.success({ text: chalk_1["default"].greenBright("Student Added Successfully") });
                    return [2 /*return*/];
            }
        });
    });
}
exports.AddStudent = AddStudent;
// View Students Function
function ViewStudents(students, courses) {
    return __awaiter(this, void 0, void 0, function () {
        var input, index, input_1, course_id_1, course, student, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!students.length) {
                        console.log(chalk_1["default"].redBright('############ No Student Available ############'));
                        return [2 /*return*/];
                    }
                    console.table(students.map(function (val) {
                        return {
                            studentID: val.studentID,
                            Name: val.name,
                            Age: val.age,
                            Courses: val.courses.length ? val.courses.map(function (course) { return course.name; }).join(',') : "Not Enrolled",
                            Balance: "RS: ".concat(val.balance)
                        };
                    }));
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'index',
                                message: 'Enter Index to Register In Course OR Any key to Exit : ',
                                type: 'number'
                            }])];
                case 1:
                    input = _a.sent();
                    return [4 /*yield*/, input['index']];
                case 2:
                    index = _a.sent();
                    if (!(index <= students.length - 1 && index >= 0)) return [3 /*break*/, 6];
                    if (!courses.length) {
                        console.log(chalk_1["default"].redBright('############ No Course Available ############'));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'course',
                                message: 'Select Course: ',
                                type: 'list',
                                choices: courses.map(function (val) { return { name: "".concat(val.name, " (Fee: RS ").concat(val.fee, ")"), value: val.id }; })
                            }])];
                case 3:
                    input_1 = _a.sent();
                    return [4 /*yield*/, input_1['course']];
                case 4:
                    course_id_1 = _a.sent();
                    course = courses.filter(function (val) { return val.id === course_id_1; })[0];
                    student = students.at(index);
                    spinner = (0, nanospinner_1.createSpinner)('Registering ').start();
                    return [4 /*yield*/, sleep()];
                case 5:
                    _a.sent();
                    if (student === null || student === void 0 ? void 0 : student.courses.includes(course)) {
                        spinner.error({ text: chalk_1["default"].redBright("############ STUDENT ALREADY ENROLLED IN THIS COURSE ############") });
                        return [2 /*return*/];
                    }
                    if ((student === null || student === void 0 ? void 0 : student.balance) < course.fee) {
                        spinner.error({ text: chalk_1["default"].redBright("############ YOU DON'T HAVE ENOUGH BALANCE TO PAY FEE ############") });
                        return [2 /*return*/];
                    }
                    student === null || student === void 0 ? void 0 : student.registerInCourse(course);
                    student === null || student === void 0 ? void 0 : student.addStudentInCourseStudents(course);
                    spinner.success({ text: chalk_1["default"].greenBright("Registered In Course Successfully and RS: ".concat(course.fee, " Fee Minus From Your Balance")) });
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.ViewStudents = ViewStudents;
