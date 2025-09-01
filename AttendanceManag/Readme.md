## Part 6: Interface-Driven Persistence with Storage

- Defined a `Storable` interface with a `toDataString()` method.
- Modified `Student`, `Course`, and `AttendanceRecord` to implement `Storable` (CSV format).
- Added `FileStorageService` for saving lists of `Storable` objects to files.
- Used `try-with-resources` for safe file handling.
- Demonstrated persistence in `Main.java`.

### How to Run

1. Navigate to project root.
2. Compile: `javac src/com/school/*.java`
3. Run: `java -cp src com.school.Main`
4. Check files: `students.txt`, `courses.txt`, `attendance_log.txt`
