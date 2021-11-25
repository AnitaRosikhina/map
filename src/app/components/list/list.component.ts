import {Component, Input, OnInit} from '@angular/core';
import {MarkerService} from "../../shared/services/marker.service";
import {IMarker} from "../../shared/model/marker";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() highlightedItem: IMarker

  markers: IMarker[] | undefined

  constructor(private markerService: MarkerService) { }

  ngOnInit() {
    this.markers = this.markerService.getAll()
  }
}
