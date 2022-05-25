import {  Module } from '@nestjs/common';
import { DatabaseModule } from '../../../database/database.module';
import { DomainModule } from 'src/api/todo/01-domain/domain.module';
import { TodoMapper } from '../03-infrastructure/server-adapter/todo.mapper.postgres'
import { TodoRepositoryPostgres }  from '../03-infrastructure/server-adapter/todo.repository.postgres';
import { CreateTodoUseCase } from './create-todo.usecase';
import { DeleteTodoUseCase } from './delete-todo.usecase';
import { GetAllTodosUseCase } from './get-all-todos.usecase';
import { GetTodoUseCase } from './get-todo.usecase';
import { UpdateTodoUseCase } from './update-todo.usecase';
import { DeleteAllTodosUseCase } from './delete-all-todos.usecase';

@Module({
  imports: [
    DomainModule,
    DatabaseModule
  ],
  providers: [
    GetAllTodosUseCase,
    {
        provide: 'TodoRepository',
        useClass: TodoRepositoryPostgres,
      },
    CreateTodoUseCase,
    GetTodoUseCase,
    UpdateTodoUseCase,
    DeleteTodoUseCase,
    DeleteAllTodosUseCase,
    TodoMapper

  ],
  exports: [
    CreateTodoUseCase,
    GetTodoUseCase,
    GetAllTodosUseCase,
    UpdateTodoUseCase,
    DeleteTodoUseCase,
    DeleteAllTodosUseCase,
    TodoMapper
  ],
})
export class ApplicationModule { }
