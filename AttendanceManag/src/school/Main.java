package com.school;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Create students
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", "Grade 10"));
        students.add(new Student("Bob", "Grade 11"));

        // Create courses
        List<Course> courses = new ArrayList<>();
        courses.add(new Course(201, "Mathematics"));
        courses.add(new Course(202, "Science"));

        // Create attendance records
        List<AttendanceRecord> records = new ArrayList<>();
        records.add(new AttendanceRecord(students.get(0).getId(), courses.get(0).getCourseId(), "Present"));
        records.add(new AttendanceRecord(students.get(1).getId(), courses.get(1).getCourseId(), "Absent"));

        // Save data to files
        FileStorageService storageService = new FileStorageService();
        storageService.saveData(students, "students.txt");
        storageService.saveData(courses, "courses.txt");
        storageService.saveData(records, "attendance_log.txt");

        // Print confirmation
        System.out.println("\n--- Attendance Records ---");
        for (AttendanceRecord record : records) {
            record.displayRecord();
        }
    }
}
