import { Injectable } from "@nestjs/common";
import { Todo } from "../01-domain/todo.entity";


export class TodoMapper  {

toDomain(raw: Record<number, any>): Todo {
    return null;
}

toPersistence(entity: Todo): Record<string, any> {
    return null;
}
}