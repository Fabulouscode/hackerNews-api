import { Controller, Get } from '@nestjs/common';
import { HackerNewsService } from '../hacker-news/hacker-news.service';
import { findTopWords } from '../utils';

@Controller('stories')
export class StoriesController {
constructor(private readonly hackerNewsService: HackerNewsService) {}

    private async getTopWordsByServiceMethod(serviceMethod: () => Promise<string[]>): Promise<string[]> {
        const titles = await serviceMethod();
        const topWords = findTopWords(titles);
        return topWords;
    }

    @Get('top-words')
    async getTopWords(): Promise<string[]> {
        return this.getTopWordsByServiceMethod(() => this.hackerNewsService.getLast25StoryTitles());
    }

    @Get('top-words-last-week')
    async getTopWordsLastWeek(): Promise<string[]> {
        return this.getTopWordsByServiceMethod(() => this.hackerNewsService.getLastWeekStoryTitles());
    }

    @Get('top-words-high-karma-users')
    async getTopWordsHighKarmaUsers(): Promise<string[]> {
        return this.getTopWordsByServiceMethod(() => this.hackerNewsService.getLast600StoryTitlesForHighKarmaUsers());
    }
}
