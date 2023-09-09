// Import stylesheets
import './style.css';
import './factory-class';
import { LoggerFactory } from './factory-class';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const env = 'production';
const loggerFactory = LoggerFactory.createLogger(env);
loggerFactory.info('logger created!');
loggerFactory.error('logger error');
