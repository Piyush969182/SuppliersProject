import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[],filteredString: string ) {
    if(!list || !filteredString){
      console.log("in")
      return list;
    }
    return list.filter(list=>list.name.toLowerCase().indexOf(filteredString.toLocaleLowerCase()) !==-1);
  }
}
