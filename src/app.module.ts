import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { BusinessModule } from './business/business.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, BusinessModule, ConfigModule.forRoot(), AuthModule],
})
export class AppModule {}
