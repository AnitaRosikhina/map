import { Pipe, PipeTransform } from '@angular/core';
import {IMarker} from "../../../shared/model/marker";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(markers: IMarker[], search: string = ''): IMarker[] {
    if (!search.trim()) {
      return markers
    }
    return markers.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}
