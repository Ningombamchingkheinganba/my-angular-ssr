import { Injectable } from '@angular/core';
import { delay, forkJoin, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return of("Learning");

    //resolve gi implementation check
    // return of("Learning").pipe(delay(3000));
  }

  getwidgetOneData() {
    return new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(23);
        observer.complete();
      },5000)
    })
  }

  getwidgetTwoData() {
    return new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(50);
        observer.complete();
      },3000)
    })
  }

  getwidgetThreeData() {
    return new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(63);
        observer.complete();
      },1000)
    })
  }

  getAllDatas() {
    const observableOne = new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(23);
        observer.complete();
      },5000)
    })

    const observableTwo = new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(50);
        observer.complete();
      },3000)
    })

    const observableThree = new Observable<number>((observer)=>{
      setTimeout(()=>{
        observer.next(63);
        observer.complete();
      },1000)
    })

    return forkJoin([observableOne,observableTwo,observableThree]);
  }
}
