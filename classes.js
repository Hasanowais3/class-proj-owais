"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Teacher = exports.Student = exports.Course = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Course = /** @class */ (function () {
    function Course(name, timing, fee) {
        this.id = Math.floor(Math.random() * 892734);
        this.students = [];
        this.name = name;
        this.timing = timing;
        this.fee = fee;
    }
    Course.prototype.registerStudent = function (student) {
        this.students.push(student);
    };
    Course.prototype.addCourseInStudentCourses = function (student) {
        student.registerInCourse(this);
    };
    Course.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    Course.prototype.addCourseInTeacherCourses = function (teacher) {
        teacher.assignCourse(this);
    };
    return Course;
}());
exports.Course = Course;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.studentID = Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)); // 5 digit random number
        _this.balance = 2000;
        _this.courses = [];
        return _this;
    }
    Student.prototype.registerInCourse = function (course) {
        this.courses.push(course);
        this.submitFee(course.fee);
    };
    Student.prototype.addStudentInCourseStudents = function (course) {
        course.registerStudent(this);
    };
    Student.prototype.submitFee = function (fee) {
        this.balance -= fee;
    };
    return Student;
}(Person));
exports.Student = Student;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.teacherID = Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)); // 5 digit random number
        _this.courses = [];
        return _this;
    }
    Teacher.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    Teacher.prototype.addTeacherInCourseTeacher = function (course) {
        course.setTeacher(this);
    };
    return Teacher;
}(Person));
exports.Teacher = Teacher;
