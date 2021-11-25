import {Component, OnInit} from '@angular/core';
import {MarkerService} from "../../shared/services/marker.service";
import {IMarker} from "../../shared/model/marker";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude: number = 51.678418
  longitude: number = 7.809007
  markers: IMarker[] | undefined

  constructor(private markerService: MarkerService) {}


  ngOnInit() {
    this.markers = this.markerService.getAll()
  }
}
