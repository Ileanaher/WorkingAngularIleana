import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSwitchComponent } from './tarjeta-switch.component';

describe('TarjetaSwitchComponent', () => {
  let component: TarjetaSwitchComponent;
  let fixture: ComponentFixture<TarjetaSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
