import { IsString, IsNotEmpty } from 'class-validator';
import { Todo } from 'src/api/todo/01-domain/todo.entity';

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
