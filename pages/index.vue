<template>
    <div class="main">
        
        <div class="todosection">
            <h1 class="text">All Todos</h1>
            <form @submit.prevent="submitForm" >
                <input type="text" v-model="userInput.name">
                <button type="submit">Add</button>
            </form>
            <ul class="todolist">
                <li v-for="todo in todoList"> 
                    <!-- {{ todo.name }} -->
                    {{ todo.name }}
                    <button id="firstbutton"  @click="deleteTodo(todo.name)"><Icon name="ic:baseline-delete"></Icon></button>
                    <button @click="favoriteTodo"><Icon name="vscode-icons:file-type-funding"></Icon></button>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    // const { data: todos }= await useAsyncData('todos', () => $fetch('http://localhost:3333/todo/all', {
    //     mode: 'no-cors'
    // })) 

    interface Todos{
        name: string
        isFav: boolean
    }

    const userInput = ref<Todos>({
        name: '',
        isFav: false
    })

    const todoList = ref< Todos []>([
        { name: 'Buy Milk', isFav: false },
        { name: 'Watch Football', isFav: true}
    ])

    const favoriteTodo = (): void => {
        // todoItems.isFav = !todoItems.isFav
        alert('Added to Favorites')
    }

    const deleteTodo = (todo: string): void => {
        const confirmAction = confirm('Delete Item?')

        if(confirmAction === true){
            todoList.value = todoList.value.filter(todoItem => todo !== todoItem.name )
            userInput.value = { name: '', isFav: false} 
            alert('Todo Deleted')
        }
        
    }

    const submitForm = (): void => {
        // Add item to list
        if(userInput.value.name === ''){
            alert('Please Input Item')
        }else{
            todoList.value.push(userInput.value)
            userInput.value = { name: '', isFav: false}
        }
    }

</script>

<style scoped>

    .todolist{
        list-style: none;
        padding: 0;
    }

    .main{
        width: 50%;
        margin: auto;
    }

    .todosection{
        margin: auto;
        width: 50%;
    }

    /* #firstbutton{
        margin-left: 25px;
        margin-right: 5px;
    } */

</style>