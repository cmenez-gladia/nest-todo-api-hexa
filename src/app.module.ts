import { Logger, Module } from '@nestjs/common';
import { TodosModule} from './api/todo/todo.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    DatabaseModule,
    TodosModule
  ],
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

}
