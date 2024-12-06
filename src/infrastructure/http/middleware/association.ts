import TeacherModel from "@infrastructure/database/models/teacher.model";
import StudentModel from "@infrastructure/database/models/student.model";

export const defineAssociations = () => {
    TeacherModel.hasMany(StudentModel, { foreignKey: 'teacherId', as: 'student' });
    StudentModel.belongsTo(TeacherModel, { foreignKey: 'teacherId', as: 'teacher' });
};