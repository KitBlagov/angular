import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
  private data: string[] = ["Iphone 15", "Samsung 21", "MacBook 21"]

  constructor(private logService: LogService) { }

  getData(): string[] {
    return this.data;
  }

  addData(name: string){
    this.data.push(name);
  }
}
