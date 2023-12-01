import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {


  private compare(a:any, b:any){
    const cretedOnA = a.cretedOn;
    const cretedOnB = b.cretedOn;

    let comparison = 1;
    if (cretedOnA > cretedOnB){
      comparison = -1;
    }
    return comparison;
  }

  transform(reviews: any[]): any[] {
    if (reviews && reviews.length){
      return reviews.sort(this.compare);
    }
    return [];
  }

}
