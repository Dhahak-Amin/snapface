import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  faceSnaps!: FaceSnap[];
 
  ngOnInit(): void {
    this.faceSnaps =[
     new FaceSnap(
      'My first snap',    
      'A beautiful lights',
      'https://www.ivry94.fr/fileadmin/_processed_/1/a/csm_20250214-Palestine-livre-1500x1000-2_1f16437398.jpg',
      new Date(),
      150,
      'Like this snap ! ',true
    ),
     new FaceSnap( 'My second snap','AFRIIIIICA', 'https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/hero-africa-elephants.jpg.adapt.eight-ninety-six.jpg',
      new Date(),
      450,
      'Like Africa ! ',false
    )];
  this.faceSnaps[0].setLocation('Palestine');

  }



  
}
