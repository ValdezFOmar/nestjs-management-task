import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { BusinessModule } from './business/business.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TasksModule, BusinessModule, ConfigModule.forRoot()],
})
export class AppModule {}
