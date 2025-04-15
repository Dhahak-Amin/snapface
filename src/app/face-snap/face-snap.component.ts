import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 @Input( )  faceSnap!: FaceSnap;
 ngOnInit(): void { 
    console.log('FaceSnapComponent initialized with:', this.faceSnap);
  }
}

