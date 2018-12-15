// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
export const getTasks = `query GetTasks($id: ID!) {
  getTasks(id: $id) {
    id
    user
    name
    description
    status
  }
}
`;
export const listTaskss = `query ListTaskss(
  $filter: ModelTasksFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaskss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      name
      description
      status
    }
    nextToken
  }
}
`;
