import fs from 'fs';

interface IFileReader {
  isJSONFile(file: string): boolean;
  readText(file: string): string;
  readJSON(file: string): unknown;
}

export class DirectoryScraper {
  constructor(public directoryPath: string, public fileReader: IFileReader) {}

  scanFiles(directoryPath: string) {
    return fs
      .readdirSync(this.directoryPath)
      .reduce<Record<string, unknown>>(
        (acc: Record<string, unknown>, file: string) => {
          if (this.fileReader.isJSONFile) {
            acc[file] = this.fileReader.readJSON(
              `${this.directoryPath}/${file}`
            );
          } else {
            acc[file] = this.fileReader.readText(
              `${this.directoryPath}/${file}`
            );
          }
          return acc;
        },
        {}
      );
  }
}

export class DirectoryFileReader implements IFileReader {
  isJSONFile(file: string): boolean {
    return file.endsWith('.json');
  }
  readText(file: string): string {
    return fs.readFileSync(file, 'utf8').toString();
  }
  readJSON(file: string): unknown {
    return JSON.parse(fs.readFileSync(file, 'utf8').toString());
  }
}
