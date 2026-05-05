package org.example.service;

import org.example.model.Todo;
import org.example.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getTodos(){
        return todoRepository.findAll();
    }

    public Todo createnewtodo(Todo todo){
        return todoRepository.save(todo);
    }

    public Todo update(Long id,Todo updatedtodoversion){
        if(todoRepository.existsById(id)){
            Todo todo=todoRepository.findById(id).get();
            todo.setTitle(updatedtodoversion.getTitle());
            todo.setDescription(updatedtodoversion.getDescription());
             Todo saved=todoRepository.save(todo);
            return saved ;
        }else{
            throw new RuntimeException("Todo not found");
        }
    }

    public Todo togglePressed(Long id){
        if(todoRepository.existsById(id)){
            Todo todo=todoRepository.findById(id).get();
            todo.setDone(!todo.isDone());
            Todo saved=todoRepository.save(todo);
            return saved;
        }else {
            throw new RuntimeException("Todo not found");
        }
    }

    public void delete(Long id){
        todoRepository.deleteById(id);
    }
}
