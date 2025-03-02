
}

class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  addTodo(task: string, dueDate: Date): void {
    this.todos.push({ id: this.nextId++, task, completed: false, dueDate });
  }

  completeTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    } else {
      console.error(Todo with id ${id} not found.);
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  listTodos(): TodoItem[] {
    return this.todos;
  }

  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter(todo => todo.completed === completed);
  }

  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.task = newTask;
    } else {
      console.error(Todo with id ${id} not found.);
    }
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}

// Example usage
const todoList = new TodoList();
todoList.addTodo("Buy groceries", new Date("2024-03-05"));
todoList.addTodo("Complete TypeScript project", new Date("2024-03-10"));
console.log("All Todos:", todoList.listTodos());
todoList.completeTodo(1);
console.log("Completed Todos:", todoList.filterTodos(true));
todoList.updateTodo(2, "Complete TypeScript course");
todoList.clearCompleted();
console.log("Remaining Todos:", todoList.listTodos());
