import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seat-booking-app';
  availableSeats: number[] = [];
  //mapData = new Map();

  coachLayout = [
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 7 }, () => ({ available: true })),
    Array.from({ length: 3 }, () => ({ available: true }))
  ];
  seatsAvailableInRow: number[] = [];
  numSeats: number = 0;

  constructor() {}

  ngOnInit() {
     this.coachLayout[0][0].available = false;
  }

  bookSeats() {
    let seatsToBook = this.numSeats;
  
    for (let i = 0; i < this.coachLayout.length; i++) {
      const row = this.coachLayout[i];
      let startIndex = -1;
      let consecutiveSeats = 0;
  
      for (let j = 0; j < row.length; j++) {
        if (row[j].available) {
          if (startIndex === -1) {
            startIndex = j;
          }
          consecutiveSeats++;
          if (consecutiveSeats === seatsToBook) {
            for (let k = startIndex; k < startIndex + seatsToBook; k++) {
              row[k].available = false;
            }
            return;
          }
        } else {
          startIndex = -1;
          consecutiveSeats = 0;
        }
      }
    }

    // let mapData = this.getAvailableSeats();
    // let totalSeatsAvailable = 0;
    // mapData.forEach(value => {
    //   totalSeatsAvailable += value;
    // });
    // if (totalSeatsAvailable >= seatsToBook) {
    //   let maxNumber = -Infinity;
    //   let maxNumberKey;

    //   mapData.forEach((value, key) => {
    //     if (value > maxNumber) {
    //       maxNumber = value;
    //       maxNumberKey = key;
    //     }
    //   });
    // }
  
    // for (let i = 0; i < this.coachLayout.length; i++) {
    //   const row = this.coachLayout[i];
  
    //   for (let j = 0; j < row.length; j++) {
    //     if (row[j].available) {
    //       const seatsInRow = row.slice(j, j + seatsToBook);
    //       if (seatsInRow.every(seat => seat.available)) {
    //         seatsInRow.forEach(seat => (seat.available = false));
    //         return `Seats ${j + 1} to ${j + seatsToBook} booked successfully in row ${i + 1}.`;
    //       }
    //     }
    //   }
    // }

    return "Sorry, requested number of seats are not available.";
  }

  getAvailableSeats() {
    let mapData = new Map();
    mapData.values
    for (let index = 0; index < this.coachLayout.length; index++) {
      const element = this.coachLayout[index];
      let avalSeats: number = 0;
      element.map(x => {
        if (x.available) {
          avalSeats++;
        }
      });
      if (avalSeats > 0) {
        mapData.set(index, avalSeats);
      }
    }
    return mapData;
  }
  
}
