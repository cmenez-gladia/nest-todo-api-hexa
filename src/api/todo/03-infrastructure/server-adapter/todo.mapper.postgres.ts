import { Mapper } from 'src/core/mapper';
import { Todo } from '../../01-domain/todo.entity';

export class TodoMapper implements Mapper<Todo> {

  public static ENTITY_NAME = 'todo'

  toDomain(rawTodo: Record<string, any>): Todo {
    if (!rawTodo) return null;

    return ({
      ...rawTodo,
    } as Todo);
  }

  toPersistence(todo: Todo): Record<string, any> {
    return {
      title: todo.title,
      content: todo.content
    };
  }
}

// c est une instance donc TodoPostgreSingleton => todoPostgreSingleton
export const TodoPostgreSingleton = new TodoMapper();
