import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// console.log('🚀 MONGO_URL:', process.env.MONGO_URL); // Debug log
@Module({
  imports: [
    UsersModule,
    CommentsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URL || 'mongodb://localhost:27017/nestjs-api',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
