import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header Text', () => {
    component.headerText = "Header Text";
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('h3');
    expect(element.textContent).toContain("Header Text");
  })

  it('show Header should to be invisible', () => {
    
    component.showHeader = false;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.card-header');
    expect(element).toBeNull();
  })

  it('show Header should to be visible', () => {
    
    component.showHeader = true;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.card-header');
    expect(element).not.toBeNull();
  })
});
