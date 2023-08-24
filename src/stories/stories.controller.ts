import { Controller, Get } from '@nestjs/common';
import { HackerNewsService } from './hacker-news/hacker-news.service';
import { findTopWords } from './utils';

@Controller('stories')
export class StoriesController {
constructor(private readonly hackerNewsService: HackerNewsService) {}

@Get('top-words')
    async getTopWords(): Promise<string[]> {
        const titles = await this.hackerNewsService.getLast25StoryTitles();
        const topWords = findTopWords(titles);
        return topWords;
    }

@Get('top-words-last-week')
    async getTopWordsLastWeek(): Promise<string[]> {
        const titles = await this.hackerNewsService.getLastWeekStoryTitles();
        const topWords = findTopWords(titles);
        return topWords;
    }

@Get('top-words-high-karma-users')
    async getTopWordsHighKarmaUsers(): Promise<string[]> {
        const titles = await this.hackerNewsService.getLast600StoryTitlesForHighKarmaUsers();
        const topWords = findTopWords(titles);
        return topWords;
    }
}