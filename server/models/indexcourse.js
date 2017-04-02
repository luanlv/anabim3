let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const CategorySchema = require('./category').schema;
const CourseSchema = require('./course').schema;

let CateWithCoursesSchema = new Schema({
  category: CategorySchema,
  courses: [CourseSchema]
})

let IndexCourseSchema = new Schema({
  value: [CateWithCoursesSchema]
}, { collection: 'indexcourse'});

IndexCourseSchema.plugin(autoIncrement.plugin, 'IndexCourse')

let IndexCourse = mongoose.model('IndexCourse', IndexCourseSchema)

module.exports = IndexCourse
