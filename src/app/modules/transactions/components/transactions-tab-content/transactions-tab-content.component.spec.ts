import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTabContentComponent } from './transactions-tab-content.component';

describe('TransactionsTabContentComponent', () => {
  let component: TransactionsTabContentComponent;
  let fixture: ComponentFixture<TransactionsTabContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsTabContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
