import { Inject, Logger } from '@nestjs/common';
import { ITodoRepository } from './ports/todo.repository';


export class DeleteTodoUseCase {

  private readonly logger = new Logger(DeleteTodoUseCase.name);

  constructor(@Inject('TodoRepository') private todoRepository: ITodoRepository) { }

  public async execute(id : number): Promise<void> {
   return this.todoRepository.delete(id);
  } 
}
