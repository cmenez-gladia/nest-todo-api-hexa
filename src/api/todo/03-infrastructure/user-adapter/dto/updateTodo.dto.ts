import { IsString, IsNotEmpty } from 'class-validator';
import { Todo } from '../../../../../api/todo/01-domain/todo.entity';

export class UpdateTodoDto {

     @IsString()
     @IsNotEmpty()
     title: string;

     @IsString()
     @IsNotEmpty()
     content: string;

     public static fromDto(data: UpdateTodoDto): Todo {
          return new Todo(data.title, data.content);
     }
}