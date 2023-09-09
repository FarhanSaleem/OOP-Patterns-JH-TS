export interface ILogger {
  info(message: string);
  warn(message: string);
  debug(message: string);
  error(message: string);
}

class DevelopmentLogger implements ILogger {
  info(message: string) {
    console.log(message);
  }
  warn(message: string) {
    console.log(message);
  }
  debug(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.log(message);
  }
}

class ProductionLogger implements ILogger {
  info(message: string) {}
  warn(message: string) {
    console.log(message);
  }
  debug(message: string) {}
  error(message: string) {
    console.log(message);
  }
}

export class LoggerFactory {
  public static createLogger(env: string): ILogger {
    if (env === 'development') {
      return new DevelopmentLogger();
    } else {
      return new ProductionLogger();
    }
  }
}
