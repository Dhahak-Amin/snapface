import { CommonModule, DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common'; // Import du CommonModule
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule, NgStyle, NgClass, LowerCasePipe, TitleCasePipe, DatePipe, UpperCasePipe], // Ajout de CommonModule
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private readonly faceSnapService: FaceSnapService) {}

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  onSnap(): void {
    if (this.faceSnap.isSnapped) {
      this.faceSnapService.unsnapFaceSnapById(this.faceSnap.id);
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
    }
  }
}