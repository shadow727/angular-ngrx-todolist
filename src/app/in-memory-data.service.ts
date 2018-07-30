import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 0, title: 'Angular Practice 1', content: 'none', status: true },
      { id: 1, title: 'Angular Practice 2', content: 'none', status: false },
      { id: 2, title: 'Angular Practice 3', content: 'none', status: false },
      { id: 3, title: 'Angular Practice 4', content: 'none', status: false },
      { id: 4, title: 'Angular Practice 5', content: 'none', status: true },
      { id: 5, title: 'Angular Practice 6', content: 'none', status: false },
      { id: 6, title: 'Angular Practice 7', content: 'none', status: true },
      { id: 7, title: 'Angular Practice 8', content: 'none', status: false },
      { id: 8, title: 'Angular Practice 9', content: 'none' , status: true},
      { id: 9, title: 'Angular Practice 10', content: 'none', status: false},
      { id: 10, title: 'Angular Practice 11', content: 'none', status: true},
      { id: 11, title: 'Angular Practice 12', content: 'none', status: false}
    ];
    return {todos};
  }
}
