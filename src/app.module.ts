import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig } from './ormConfig';
import { ConfigModule } from '@nestjs/config';
import { TodosModule} from './api/todo/todo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(ORMConfig),
    ConfigModule.forRoot(),
    TodosModule
  ],
})
export class AppModule {}
