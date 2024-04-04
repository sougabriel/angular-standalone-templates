import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAnnotatedComponent } from './bar-annotated.component';

describe('BarAnnotatedComponent', () => {
  let component: BarAnnotatedComponent;
  let fixture: ComponentFixture<BarAnnotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarAnnotatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarAnnotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
