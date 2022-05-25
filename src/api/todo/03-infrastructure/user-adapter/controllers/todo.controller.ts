import { Controller, Get, Put, Res, Post, Body, HttpStatus, Delete, Param, UseFilters, Logger } from '@nestjs/common';
import { TodoMapper } from '../../server-adapter/todo.mapper.postgres';
import { CreateTodoDto } from '../dto/createTodo.dto';
import { UpdateTodoDto } from '../dto/updateTodo.dto';
import { TodoDto } from '../dto/todo.dto';
import { GetTodoUseCase } from '../../../02-application/get-todo.usecase';
import { CreateTodoUseCase } from '../../../02-application/create-todo.usecase';
import { GetAllTodosUseCase } from '../../../02-application/get-all-todos.usecase';
import { UpdateTodoUseCase } from '../../../02-application/update-todo.usecase';
import { DeleteTodoUseCase } from '../../../02-application/delete-todo.usecase';
import { DeleteAllTodosUseCase } from '../../../02-application/delete-all-todos.usecase';
import { Todo } from 'src/api/todo/01-domain/todo.entity';

@Controller('todo')
export class TodoController {

    private readonly logger = new Logger(TodoController.name);

    constructor(private readonly todoMapper: TodoMapper,
        private readonly getTodoUsecase: GetTodoUseCase,
        private readonly createTodoUsecase: CreateTodoUseCase,
        private readonly getAllTodoUseCase: GetAllTodosUseCase,
        private readonly updateTodoUseCase: UpdateTodoUseCase,
        private readonly deleteTodoUsecase: DeleteTodoUseCase,
        private readonly deleteAllTodoUsecase: DeleteAllTodosUseCase) { }


    @Get('/')
    async getAll(@Res() res) {

        const todos = await this.getAllTodoUseCase.execute();
        console.log('getAll '+ todos);
        return res.status(HttpStatus.OK).json({
            todos
        });

    }

    @Get(':id')
    async get(@Res() res, @Param('id') id: number) {

        const todo = await this.getTodoUsecase.execute(id);
        return res.status(HttpStatus.OK).json({
            todo
        });

    }

    @Post('/')
    async create(@Res() res, @Body() data: CreateTodoDto) {
        const Todo = CreateTodoDto.fromDto(data)
        const result = await this.createTodoUsecase.execute(Todo);
        console.log(result);
        return res.status(HttpStatus.OK).json({
            result,
            message: `Todo successfully created`
        });

    }

    @Put(':id/update')
    async update(@Res() res, @Param('id') id: number, @Body() data: UpdateTodoDto) {
        const Todo = UpdateTodoDto.fromDto(data)
        const result = await this.updateTodoUseCase.execute(id, Todo);
        return res.status(HttpStatus.OK).json({
            result,
            message: `Todo successfully updated`
        });

    }

    @Delete(':id/delete')
    async delete(@Res() res, @Param('id') id: number) {
        await this.deleteTodoUsecase.execute(id);
        return res.status(HttpStatus.OK).json({
            message: `Todo successfully deleted`
        });
    }

    @Delete('/')
    async deleteAll(@Res() res) {
        await this.deleteAllTodoUsecase.execute();
        return res.status(HttpStatus.OK).json({
            message: `All todos successfully deleted`
        });
    }

}


