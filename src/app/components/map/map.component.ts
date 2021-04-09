import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 5 random jitteries
    const jittery = Array(5).fill(this.centroid).map( x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]);

    for (const i of jittery) {
         const marker = L.marker(i as L.LatLngExpression).addTo(this.map);
    }

    tiles.addTo(this.map);
  
  }

  constructor() { }

  ngOnInit(): void {
        this.initMap();
  }

  ngAferViewInit(): void {

  }


}
