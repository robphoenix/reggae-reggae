import { inject, TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });
  });

  xit('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
