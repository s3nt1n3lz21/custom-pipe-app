import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filesize' })
export class FileSizePipe implements PipeTransform {
    transform(filesize: number, extension: string = 'MB', decimalPoints: number = 2): string {
        return (filesize / (1024 * 1024)).toFixed(decimalPoints) + extension;
    }
}