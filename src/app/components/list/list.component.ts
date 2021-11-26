import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarkerService} from "../../shared/services/marker.service";
import {IMarker} from "../../shared/model/marker";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() highlightedItem: IMarker

  @Output() selectedMarker = new EventEmitter<IMarker>()

  markers: IMarker[] | undefined

  constructor(private markerService: MarkerService) { }

  ngOnInit() {
    this.markers = this.markerService.getAll()
  }

  onChoseItem(car: IMarker): void {
    this.selectedMarker.emit(car)
  }
}
