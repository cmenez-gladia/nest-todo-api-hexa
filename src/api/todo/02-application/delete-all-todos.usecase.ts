import { Inject, Logger } from '@nestjs/common';
import { ITodoRepository } from './ports/todo.repository';

export class DeleteAllTodosUseCase {

  private readonly logger = new Logger(DeleteAllTodosUseCase.name);

  constructor(@Inject('TodoRepository') private todoRepository: ITodoRepository) { }

  public async execute(): Promise<void> {

   return await  this.todoRepository.deleteAll();
  
  } 
}
