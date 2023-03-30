<template>
  <div class="flex h-screen justify-center items-center mt-5 shadow-lg">
    <div class="">
        <h1 class="text-3xl mb-3">Todo App</h1>
        <form @submit.prevent="">
            <!-- <input type="text" class="form-input"> -->
            <input v-model="input" class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Add Item">
            <button class="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="addTodo({ name: `${input}`, isFav: false})">Add</button>
        </form>
        <ul class="mt-2 bg-gray-100">
            <li class="flex" v-for="todo in data">
                <p>{{ todo.name }}</p>
                <div class="">
                    <button @click="removeItem(todo.name)" ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="#888888" stroke-linejoin="round" stroke-width="4"><path d="M9 10v34h30V10H9Z"/><path stroke-linecap="round" d="M20 20v13m8-13v13M4 10h40"/><path d="m16 10l3.289-6h9.488L32 10H16Z"/></g></svg></button>
                    <button ><svg @click="favoriteTodo(todo)" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><path :fill="todo.isFav === true ? 'red': 'none'" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"/></svg></button>
                </div>

            </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
    import { useIntervalFn } from '@vueuse/core'    
    const { data,refresh } = await useFetch('https://nest-todo-app.vercel.app/todo/all')

    const input = ref('')

    const addTodo = async (todoItem) => {
        // todos.value.push(todoItem)
        console.log(todoItem);
        const { data } = await useFetch('https://nest-todo-app.vercel.app/todo/add', 
            {  method: "post",headers: ({"Content-type": "application/json"}), body: JSON.stringify(todoItem)}
        )
        alert('Todo Item added to database')
        input = ''
    }  

    const removeItem = async (item) => {
    //    todos.value = todos.value.filter(todo => item !== todo.name)
        const { data } = await useFetch('https://nest-todo-app.vercel.app/todo/add')
    }

    const favoriteTodo = (item) => {
        item.isFav = !item.isFav
    }

    useIntervalFn(() => {
        refresh()
    }, 1000)

</script>

<!-- 2: 07: 00 - SEO and Meta -->