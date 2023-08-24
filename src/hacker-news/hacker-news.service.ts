import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HackerNewsService {
  async getLast25StoryTitles(): Promise<string[]> {
    const response = await axios.get<number[]>(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    );
    
    const storyIds = response.data.slice(0, 25);
    const storyPromises = storyIds.map(id =>
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    );
    const stories = await Promise.all(storyPromises);
    
    return stories.map(story => story.data.title);
  }
}