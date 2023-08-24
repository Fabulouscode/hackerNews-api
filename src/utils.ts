import _ from 'lodash';

export function findTopWords(titles: string[]): string[] {
  const allWords = titles
    .join(' ')
    .toLowerCase()
    .split(/\s+/);
    
  const wordCounts = _.countBy(allWords);
  const sortedWords = Object.keys(wordCounts).sort(
    (a, b) => wordCounts[b] - wordCounts[a]
  );
  
  return sortedWords.slice(0, 10);
}