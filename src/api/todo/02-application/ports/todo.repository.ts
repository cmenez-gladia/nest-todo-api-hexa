import { Todo } from "src/api/todo/01-domain/todo.entity";

export interface ITodoRepository {
    create(todo: Record<string, any>):Promise<Record<string, any>>;
    get(id: number):Promise<Record<string, any>>;
    getAll(): Promise<Record<string, any>[]>;
    update(id: number, todo:Record<string, any>):Promise<Todo>;
    delete(id: number):Promise<void>;
    deleteAll(): Promise<void> ;
}