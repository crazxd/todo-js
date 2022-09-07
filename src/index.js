import './styles.css';

import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ));
// const newTodo = new Todo('Aprender JavaScript'); //muestra que se puede agregar un todo en el arreglo y lo corrige en todo-list.class

// todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);


// todoList.todos.forEach( crearTodoHtml ); //se puede hacer de esta forma, ya que se esta mandando un solo argumento, si fueran dos, se ocupa lo de arriba.

// const tarea= new Todo('Aprender JavaScripst');

// todoList.nuevoTodo( tarea );
// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(()=>{
//     localStorage.removeItem('mi-key');

// }, 2500);


