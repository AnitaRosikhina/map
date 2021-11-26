import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IMarker} from "./shared/model/marker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  highlightedItem: IMarker
}
