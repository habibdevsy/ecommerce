import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TextToPhotoTab } from './textToPhotoTab.page';

describe('TextToPhotoTab', () => {
  let component: TextToPhotoTab;
  let fixture: ComponentFixture<TextToPhotoTab>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TextToPhotoTab],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TextToPhotoTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
