package com.school;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Create students
        Student s1 = new Student(101, "Alice");
        Student s2 = new Student(102, "Bob");

        // Create courses
        Course c1 = new Course(201, "Mathematics");
        Course c2 = new Course(202, "Science");

        // Attendance log
        List<AttendanceRecord> attendanceLog = new ArrayList<>();

        // Add attendance records
        attendanceLog.add(new AttendanceRecord(s1.getStudentId(), c1.getCourseId(), "Present"));
        attendanceLog.add(new AttendanceRecord(s2.getStudentId(), c2.getCourseId(), "Absent"));
        attendanceLog.add(new AttendanceRecord(s1.getStudentId(), c2.getCourseId(), "Holiday")); // invalid test

        // Display records
        System.out.println("\n--- Attendance Records ---");
        for (AttendanceRecord record : attendanceLog) {
            record.displayRecord();
        }
    }
}
