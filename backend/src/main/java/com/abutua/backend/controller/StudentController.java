package com.abutua.backend.controller;

import java.net.URI;
import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.backend.model.Student;

@RestController
@CrossOrigin
public class StudentController {
    
    private ArrayList<Student> students = new ArrayList<Student>();
    
    Student student1 = new Student(1, "Rodrigo Kakiuchi", "rodrigo@email.com", "(11) 11111-1111", 0, "Manha");
    Student student2 = new Student(2, "Glauco Todesco", "glauco@email.com", "(22) 22222-2222", 1, "Tarde");
    Student student3 = new Student(3, "Joao da Silva", "joao@email.com", "(33) 33333-3333", 2, "Noite");
    
    public StudentController(){
        students.add(student1);
        students.add(student2);
        students.add(student3);
    }

    @GetMapping("students")
    public ResponseEntity<ArrayList<Student>> getStudents(){
        return ResponseEntity.ok(students);
    }

    @GetMapping("students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id){
        Student student = students.stream()
        .filter(s -> s.getId() == id)
        .findFirst()
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));

        return ResponseEntity.ok(student);
    }

    @PostMapping("students")
    public ResponseEntity<Student> postStudent(@RequestBody Student student){
        student.setId(students.size()+1);
        students.add(student);

        URI location = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(student.getId())
        .toUri();

        return ResponseEntity.created(location).body(student);
    }

}
