import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarkerService} from "../../shared/services/marker.service";
import {IMarker} from "../../shared/model/marker";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  @Output() highlightedItem = new EventEmitter()

  @Input() selectedMarker: IMarker

  latitude: number = 51.678418
  longitude: number = 7.809007
  markers: IMarker[] | undefined

  constructor(private markerService: MarkerService) {}

  ngOnInit(): void {
    this.markers = this.markerService.getAll()
  }

  onChoseMarker(event): void {
    const highlightedItem = this.markers.find(el => el.longitude === event.longitude && el.latitude === event.latitude)
    this.highlightedItem.emit(highlightedItem)
  }
}
