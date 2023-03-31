import { defineStore }  from 'pinia'


export const useTodoStore = defineStore('todo',async () => {

    const todos = ref([ {name: "Make Todo", isFav: false}, {name: "Learn Nest js", isFav: false}])

    const { data } = await useFetch('https://nest-todo-app.vercel.app/todo/all')
  
    return {  todos, addTodo, removeItem, favoriteTodo, data }
  })