import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepressedPage } from './depressed.page';

describe('DepressedPage', () => {
  let component: DepressedPage;
  let fixture: ComponentFixture<DepressedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepressedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepressedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
