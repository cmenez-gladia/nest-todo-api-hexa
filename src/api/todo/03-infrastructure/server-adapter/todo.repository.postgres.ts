
import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from './../../../../database/database.service';
import { ITodoRepository } from '../../02-application/ports/todo.repository';
import { TodoMapper } from './todo.mapper.postgres';
//input: Record<string, any> output: Record<string, any>
@Injectable()
export class TodoRepositoryPostgres implements ITodoRepository{
 
  private readonly databaseServiceInstance;

  constructor(private readonly databaseService: DatabaseService) {
    this.databaseServiceInstance = this.databaseService.getInstance()
  }

  public async create(todo: Record<string, any>) : Promise<Record<string, any>> {
     return await this.databaseServiceInstance(TodoMapper.ENTITY_NAME).insert(todo)
  }

  public async getAll(): Promise<Record<string, any>[]>{
    return await this.databaseServiceInstance(TodoMapper.ENTITY_NAME)
  }

  public async get(id : number): Promise<Record<string, any>> {
    return await this.databaseServiceInstance(TodoMapper.ENTITY_NAME).where('id', id)
  }

  public async update(id: number, todo: Record<string, any>) {
    return  await this.databaseServiceInstance(TodoMapper.ENTITY_NAME).where('id', id).update(todo)
  }

  public async delete(id: number) : Promise<void> {
    return await this.databaseServiceInstance(TodoMapper.ENTITY_NAME).where('id', id).del();
  }

  public async deleteAll(): Promise<void> {
    return await this.databaseServiceInstance(TodoMapper.ENTITY_NAME).del()
  }

}