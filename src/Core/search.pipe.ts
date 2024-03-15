import { Pipe, PipeTransform } from '@angular/core';
import { NoteData } from './note-data';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: NoteData[], note: any): NoteData[] {
    return value.filter((item)=>item.title.toLowerCase().includes(note.toLowerCase()));
  }


}
