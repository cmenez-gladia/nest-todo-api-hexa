import { Controller, Get, Put, Res, Post, Body, HttpStatus, Delete, Param } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/createTodo.dto';
import { UpdateTodoDto } from '../dto/updateTodo.dto';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService) { }


    @Get('/all')
    async getAll(@Res() res): Promise<Todo[]> {
        try {
            const todos = await this.todoService.getAll()
            return res.status(HttpStatus.OK).json({
                ...todos
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @Get(':id')
    async get(@Res() res, @Param('id') id: string): Promise<Todo> {
        try {
            const todo = await this.todoService.get(id)
            return res.status(HttpStatus.OK).json({
                todo
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err
            })
        }
    }

    @Post('/add')
    async create(@Res() res, @Body() data: CreateTodoDto): Promise<CreateTodoDto> {
        try {
        
            const todo = await this.todoService.create(data);
            return res.status(HttpStatus.OK).json({
                todo,
                message: `Todo successfully created`
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err
            })
        }
    }

    @Delete(':id/delete')
    async delete(@Res() res, @Param('id') id: string): Promise<void> {
        try {
            await this.todoService.delete(id)
            return res.status(HttpStatus.OK).json({
                message: `Todo successfully deleted`
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err
            })
        }
    }

    @Delete('/delete')
    async deleteAll(@Res() res): Promise<void> {
        try {
            await this.todoService.deleteAll()
            return res.status(HttpStatus.OK).json({
                message: `All todos successfully deleted`
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err
            })

        }
    }


    @Put(':id/update')
    async update(@Res() res, @Param('id') id: string, @Body() todo: UpdateTodoDto): Promise<UpdateTodoDto> {
        try {
            todo.id = id;
            await this.todoService.update(todo)
            return res.status(HttpStatus.OK).json({
                todo,
                message: `Todo successfully updated`
            });
        }
        catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err
            })

        }
    }


}


