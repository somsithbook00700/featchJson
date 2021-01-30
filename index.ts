import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get(url).then(res => {
  // res.data has properties of:
  // id
  // title
  // completed

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed)

})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `)
}