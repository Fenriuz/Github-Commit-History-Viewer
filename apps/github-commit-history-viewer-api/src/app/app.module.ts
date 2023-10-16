import { Module } from '@nestjs/common';
import { CommitsModule } from './api/commits/commits.module';

@Module({
  imports: [CommitsModule],
})
export class AppModule {}
