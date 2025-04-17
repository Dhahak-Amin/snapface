import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,LowerCasePipe,TitleCasePipe,DatePipe,UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 @Input( )  faceSnap!: FaceSnap;

 constructor( private readonly faceSnapService:FaceSnapService) { }

 userHasSnapped!: boolean;
 ngOnInit(): void { 
  
 this.faceSnapService.SnapFaceSnapById( this.faceSnap.id );
 
}

} 

