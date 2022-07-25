import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTransactionTableComponent } from './details-transaction-table.component';

describe('DetailsTransactionsTableComponent', () => {
  let component: DetailsTransactionTableComponent;
  let fixture: ComponentFixture<DetailsTransactionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTransactionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
