#! /usr/bin/env node
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
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var student_js_1 = require("./student.js");
var teacher_js_1 = require("./teacher.js");
var course_js_1 = require("./course.js");
console.log(chalk_1["default"].bold.rgb(204, 204, 204)("\n   <<<===========================================>>>"));
console.log(chalk_1["default"].bold.rgb(204, 204, 204)("<<<=======>>>  ".concat(chalk_1["default"].redBright.bold('STUDENT MANAGEMENT SYSTEM'), "  <<<=======>>>")));
console.log(chalk_1["default"].bold.rgb(204, 204, 204)("   <<<===========================================>>>\n"));
var students = [];
var courses = [];
var teachers = [];
var DetailsInputs = function (type, name) { return __awaiter(void 0, void 0, void 0, function () {
    var value, input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, inquirer_1["default"].prompt([{
                            name: 'input',
                            message: "Enter ".concat(name, ": "),
                            type: type
                        }])];
            case 1:
                input = _a.sent();
                return [4 /*yield*/, input['input']];
            case 2:
                value = _a.sent();
                if (value) {
                    return [3 /*break*/, 3];
                }
                return [3 /*break*/, 0];
            case 3: return [2 /*return*/, value];
        }
    });
}); };
function IndividualChoice(val) {
    var options = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        options[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var input, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([{
                            name: 'choice',
                            message: "".concat(val, " Options"),
                            type: 'rawlist',
                            choices: options
                        }])];
                case 1:
                    input = _a.sent();
                    return [4 /*yield*/, input['choice']];
                case 2:
                    value = _a.sent();
                    return [2 /*return*/, value];
            }
        });
    });
}
function MakeChoice() {
    return __awaiter(this, void 0, void 0, function () {
        var input, value, option, option, option;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([{
                            name: 'choice',
                            message: "Select One",
                            type: 'rawlist',
                            choices: ["Student", "Teacher", "Course"]
                        }])];
                case 1:
                    input = _a.sent();
                    return [4 /*yield*/, input['choice']];
                case 2:
                    value = _a.sent();
                    if (!(value === "Student")) return [3 /*break*/, 7];
                    return [4 /*yield*/, IndividualChoice("Student", "Add Student", "View Students")];
                case 3:
                    option = _a.sent();
                    if (!(option === "Add Student")) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, student_js_1.AddStudent)(DetailsInputs, students)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (!(option === "View Students")) return [3 /*break*/, 7];
                    return [4 /*yield*/, (0, student_js_1.ViewStudents)(students, courses)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(value === "Teacher")) return [3 /*break*/, 12];
                    return [4 /*yield*/, IndividualChoice("Teacher", "Add Teacher", "View Teachers")];
                case 8:
                    option = _a.sent();
                    if (!(option === 'Add Teacher')) return [3 /*break*/, 10];
                    return [4 /*yield*/, (0, teacher_js_1.AddTeacher)(DetailsInputs, teachers)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(option === 'View Teachers')) return [3 /*break*/, 12];
                    return [4 /*yield*/, (0, teacher_js_1.ViewTeachers)(teachers, courses)];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(value === "Course")) return [3 /*break*/, 17];
                    return [4 /*yield*/, IndividualChoice("Course", "Add Course", "View Courses")];
                case 13:
                    option = _a.sent();
                    if (!(option === "Add Course")) return [3 /*break*/, 15];
                    return [4 /*yield*/, (0, course_js_1.AddCourse)(DetailsInputs, courses)];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    if (!(option === "View Courses")) return [3 /*break*/, 17];
                    return [4 /*yield*/, (0, course_js_1.ViewCourses)(courses, teachers, students)];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17: return [2 /*return*/];
            }
        });
    });
}
// Program Entry Point
while (true) {
    var choices = await MakeChoice();
    var input = await inquirer_1["default"].prompt([
        {
            name: chalk_1["default"].rgb(255, 255, 160)("Do You Want To Exit?"),
            type: "confirm",
            "default": false
        }
    ]);
    var value = await input['\x1B[38;2;255;255;160mDo You Want To Exit?\x1B[39m'];
    if (value) {
        break;
    }
    console.log(chalk_1["default"].whiteBright('\n================================================================\n'));
}
