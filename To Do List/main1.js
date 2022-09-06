const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
      form.onsubmit = (e) => {
         e.preventDefault();
          const todo = document.getElementById('todo');
          const todoText = todo.value;
          todo.value = '';
          todos.push (todoText);
          const todolist = document.getElementById('todo-list');
          // una forma para que lo quepongamos en lista aparezca en pantalla es el for
          //todolist.innerHTML = '';
          //for ( let i=0; i < todos.length; i++ ){
            // todolist.innerHTML += '<li>' + todos[i] + '</li>'; 
          //}
          // pero podemos simplificar con el .map
          const todosTemplate = todos.map (t => {
            return '<li>' + t + '</li>'; 
          })
          console.log(todosTemplate)
   }
}

