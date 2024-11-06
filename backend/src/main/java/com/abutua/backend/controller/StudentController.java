package com.abutua.backend.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abutua.backend.model.Student;

@RestController
@CrossOrigin
public class StudentController {
    
    private ArrayList<Student> students = new ArrayList<Student>();
    
    Student student1 = new Student(1, "Rodrigo Kakiuchi", "rodrigo@email.com", "(11) 11111-1111", 0, "Manha");
    
    public StudentController(){
        students.add(student1);
    }

    @GetMapping("students")
    public ResponseEntity<ArrayList<Student>> getStudents(){
        return ResponseEntity.ok(students);
    }

}
