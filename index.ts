// Import stylesheets
import './style.css';
import { LoggerFactory } from './abstract-factory/factory-class';
import {
  DirectoryFileReader,
  DirectoryScraper,
} from './builder/dir-scraper-class';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// check different logger's are created based on the env variable
const env = 'development';
const loggerFactory = LoggerFactory.createLogger(env);
loggerFactory.info('logger created!');
loggerFactory.error('logger error');

// Builder pattern
const fileReader = new DirectoryFileReader();
const directoryScraper = new DirectoryScraper('./data', fileReader);

const output = directoryScraper.scanFiles();

console.log(output);
