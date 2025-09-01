package com.school;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Create students (ID auto-generated from Person class)
        Student s1 = new Student("Alice", "Grade 10");
        Student s2 = new Student("Bob", "Grade 11");

        // Create courses
        Course c1 = new Course(201, "Mathematics");
        Course c2 = new Course(202, "Science");

        // Attendance log
        List<AttendanceRecord> attendanceLog = new ArrayList<>();

        // Add attendance records using student.getId()
        attendanceLog.add(new AttendanceRecord(s1.getId(), c1.getCourseId(), "Present"));
        attendanceLog.add(new AttendanceRecord(s2.getId(), c2.getCourseId(), "Absent"));
        attendanceLog.add(new AttendanceRecord(s1.getId(), c2.getCourseId(), "Holiday")); // invalid test

        // Display records
        System.out.println("\n--- Attendance Records ---");
        for (AttendanceRecord record : attendanceLog) {
            record.displayRecord();
        }

        // Also display details of students
        System.out.println("\n--- Student Details ---");
        s1.displayDetails();
        System.out.println();
        s2.displayDetails();
    }
}
