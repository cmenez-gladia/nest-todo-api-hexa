import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../database/database.module';
import { ApplicationModule } from '../02-application/application.module';
import { TodoController } from './user-adapter/controllers/todo.controller';

@Module({
  imports: [
    ApplicationModule,
    InfrastructureModule, 
    DatabaseModule,
    
  ],
  controllers: [
   TodoController
  ],
  providers: [
    
  ]
})
export class InfrastructureModule {}
