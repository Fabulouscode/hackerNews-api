import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesController } from './stories/stories.controller';
import { HackerNewsService } from './hacker-news/hacker-news.service';

@Module({
  imports: [],
  controllers: [AppController, StoriesController],
  providers: [AppService, HackerNewsService],
})

export class AppModule {}