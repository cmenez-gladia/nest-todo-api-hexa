import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { InfrastructureModule } from './03-infrastructure/infrastructure.module';

@Module({
  imports: [ 
    InfrastructureModule,
    DatabaseModule
  ],
  controllers: [],
  providers: []
})
export class TodosModule {}
