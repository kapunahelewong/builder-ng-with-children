const types = {
  chore: {
    description: 'Build process or auxiliary tool changes',
    emoji: '๐ค',
    value: 'chore',
  },
  docs: {
    description: ' Documentation only changes',
    emoji: 'โ๏ธ',
    value: 'docs',
  },
  feat: {
    description: 'A new feature',
    emoji: '๐ธ',
    value: 'feat',
  },
  fix: {
    description: 'A bug fix',
    emoji: '๐',
    value: 'fix',
  },
  perf: {
    description: 'A code change that improves performance',
    emoji: 'โก๏ธ',
    value: 'perf',
  },
  refactor: {
    description: 'A code change that neither fixes a bug or adds a feature',
    emoji: '๐ก',
    value: 'refactor',
  },
  release: {
    description: 'Create a release commit',
    emoji: '๐น',
    value: 'release',
  },
  test: {
    description: 'Adding missing tests',
    emoji: '๐',
    value: 'test',
  },
};

// https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type
const list = ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'perf'];

// https://github.com/angular/angular/blob/master/CONTRIBUTING.md#scope
const scopes = [];

const questions = ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'];

module.exports = {
  breakingChangePrefix: '๐งจ ',
  list,
  maxMessageLength: 64,
  minMessageLength: 3,
  questions,
  scopes,
  types,
};
