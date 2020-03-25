import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnxiousPage } from './anxious.page';

describe('AnxiousPage', () => {
  let component: AnxiousPage;
  let fixture: ComponentFixture<AnxiousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnxiousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnxiousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
