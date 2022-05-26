import { IsString, IsNotEmpty } from 'class-validator';

// tests not passing
import { Todo } from '../../../../../api/todo/01-domain/todo.entity';

export class CreateTodoDto {
     @IsString()
     @IsNotEmpty()
     title: string;
     @IsString()
     @IsNotEmpty()
     content: string;

     public static fromDto(data: CreateTodoDto): Todo {
          return new Todo(data.title, data.content);
     }
}
