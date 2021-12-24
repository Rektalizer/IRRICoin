import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinGeneratorComponent } from './bitcoin-generator.component';

describe('BitcoinGeneratorComponent', () => {
  let component: BitcoinGeneratorComponent;
  let fixture: ComponentFixture<BitcoinGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
