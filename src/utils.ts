import * as _ from 'lodash';

export function findTopWords(titles: string[]): string[] {
    const words = _.flatMap(titles, (inputString) =>
      inputString.toLowerCase().split(/\s+/)
    );

    const wordCounts = _.countBy(words);

    const sortedWords = _.chain(wordCounts)
      .toPairs()
      .sortBy((pair) => pair[1])
      .reverse()
      .map((pair) => pair[0])
      .slice(0, 10)
      .value();

    return sortedWords.slice(0, 10);
}