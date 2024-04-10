import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeActionMessageComponent } from './make-action-message.component';

describe('MakeActionMessageComponent', () => {
  let component: MakeActionMessageComponent;
  let fixture: ComponentFixture<MakeActionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeActionMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeActionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
