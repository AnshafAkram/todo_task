package org.example.controller;

import org.example.model.Todo;
import org.example.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> getTodos(){
        return todoService.getTodos();
    }
    @PostMapping
    public Todo createnewtodo(@RequestBody Todo todo){
        return todoService.createnewtodo(todo);
    }
    @PostMapping("/{id}")
    public Todo update(@PathVariable Long id,@RequestBody Todo todo){
        return todoService.update(id,todo);
    }

    @PatchMapping("/{id}/done")
    public Todo togglepressed(@PathVariable Long id){
        return todoService.togglePressed(id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        todoService.delete(id);
    }
}
