// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const createTasks = `mutation CreateTasks($input: CreateTasksInput!) {
  createTasks(input: $input) {
    id
    user
    name
    description
    status
  }
}
`;
export const updateTasks = `mutation UpdateTasks($input: UpdateTasksInput!) {
  updateTasks(input: $input) {
    id
    user
    name
    description
    status
  }
}
`;
export const deleteTasks = `mutation DeleteTasks($input: DeleteTasksInput!) {
  deleteTasks(input: $input) {
    id
    user
    name
    description
    status
  }
}
`;
