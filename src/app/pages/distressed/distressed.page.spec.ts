import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistressedPage } from './distressed.page';

describe('DistressedPage', () => {
  let component: DistressedPage;
  let fixture: ComponentFixture<DistressedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistressedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistressedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
