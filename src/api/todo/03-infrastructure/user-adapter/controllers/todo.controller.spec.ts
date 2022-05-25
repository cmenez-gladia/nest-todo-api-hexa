import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../../../../../database/database.service';
import { CreateTodoUseCase } from '../../../02-application/create-todo.usecase';
import { DeleteAllTodosUseCase } from '../../../02-application/delete-all-todos.usecase';
import { DeleteTodoUseCase } from '../../../02-application/delete-todo.usecase';
import { GetAllTodosUseCase } from '../../../02-application/get-all-todos.usecase';
import { GetTodoUseCase } from '../../../02-application/get-todo.usecase';
import { UpdateTodoUseCase } from '../../../02-application/update-todo.usecase';
import { TodoMapper } from '../../server-adapter/todo.mapper.postgres';
import { TodoRepositoryPostgres } from '../../server-adapter/todo.repository.postgres';
import { TodoController } from './todo.controller';

describe('todo', () => {
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [ CreateTodoUseCase,{
        provide: 'TodoRepository',
        useClass: TodoRepositoryPostgres,
      },DatabaseService,
        GetTodoUseCase,
        GetAllTodosUseCase,
        UpdateTodoUseCase,
        DeleteTodoUseCase,
        DeleteAllTodosUseCase,
        TodoMapper]
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('TodoController - should be defined', () => {
    expect(controller).toBeDefined();
  });
});
