/**
 * Title: books.service.ts
 * Author: Oksana Kustova
 * Date: 2/5/2022
 * Description: books service.
 */

 import { Injectable } from '@angular/core';
 import { IBook } from './book.interface';
 import { Observable } from 'rxjs';
 import { of } from 'rxjs';
 import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;
  constructor() {
    this.books = [
      {
        isbn: '0393339440',
        title: 'Joy in the Morning',
        description:
          'Steeple Bumphleigh is a very picturesque place. But for Bertie Wooster, it is a place to be avoided, containing not only the appalling Aunt Agatha but also her husband, the terrifying Lord Worplesdon. So when a certain amount of familial arm-twisting is applied, Bertie heads for the sticks in fear and trepidation despite the support of the irreplaceable Jeeves.',
        numOfPages: 272,
        authors: ['P. G. Wodehouse'],
      },
      {
        isbn: '1647991420',
        title: 'The Twelve Chairs',
        description:
          'The novel’s iconic hero, Ostap Bender, an unemployed con artist living by his wits, joins forces with Ippolit Matveyevich Vorobyaninov, a former nobleman who has returned to his hometown to look for a cache of missing jewels hidden in chairs that have been appropriated by the Soviet authorities.',
        numOfPages: 260,
        authors: ['Ilya Ilf', 'Yevgeni Petrov'],
      },
      {
        isbn: '0439358078',
        title: 'Harry Potter and the Order of the Phoenix (5)',
        description:
          "In his fifth year at Hogwart's, Harry faces challenges at every turn, from the dark threat of He-Who-Must-Not-Be-Named and the unreliability of the government of the magical world to the rise of Ron Weasley as the keeper of the Gryffindor Quidditch Team. Along the way he learns about the strength of his friends, the fierceness of his enemies, and the meaning of sacrifice.",
        numOfPages: 896,
        authors: ['J. K. Rowling'],
      },
      {
        isbn: '0679760806',
        title: 'The Master and Margarita',
        description:
          'Nothing in the whole of literature compares with The Master and Margarita. One spring afternoon, the Devil, trailing fire and chaos in his wake, weaves himself out of the shadows and into Moscow. Mikhail Bulgakov’s fantastical, funny, and devastating satire of Soviet life combines two distinct yet interwoven parts, one set in contemporary Moscow, the other in ancient Jerusalem, each brimming with historical, imaginary, frightful, and wonderful characters.',
        numOfPages: 384,
        authors: ['Mikhail Bulgakov'],
      },
      {
        isbn: '054792822X',
        title: 'The Hobbit',
        description:
          'Bilbo Baggins enjoys a comfortable, unambitious life, rarely traveling farther than the pantry of his hobbit-hole in Bag End. But his contentment is disturbed when the wizard Gandalf and a company of thirteen dwarves arrive on his doorstep to whisk him away on a journey to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon.',
        numOfPages: 300,
        authors: ['J.R.R. Tolkien'],
      },
    ];
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
