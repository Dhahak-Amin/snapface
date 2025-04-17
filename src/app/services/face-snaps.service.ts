import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
    private readonly faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'My first snap',
            'A beautiful lights',
            'https://www.ivry94.fr/fileadmin/_processed_/1/a/csm_20250214-Palestine-livre-1500x1000-2_1f16437398.jpg',
            new Date(),
            150,
            'Like this snap !', true
        ).withLocation('Palestine'),
        new FaceSnap(
            'My second snap',
            'AFRIIIIICA',
            'https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/hero-africa-elephants.jpg.adapt.eight-ninety-six.jpg',
            new Date(),
            450,
            'Like Africa !', false
        ).withLocation('Africa')
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    snapFaceSnapById(id: string): void {
        const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
        if (faceSnap) {
            faceSnap.snap();
        } else {
            console.error('FaceSnap not found');
        }
    }

    unsnapFaceSnapById(id: string): void {
        const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
        if (faceSnap) {
            faceSnap.unsnap();
        } else {
            console.error('FaceSnap not found');
        }
    }

    removeSnapById(id: string): void {
        const faceSnapIndex = this.faceSnaps.findIndex((faceSnap) => faceSnap.id === id);
        if (faceSnapIndex !== -1) {
            this.faceSnaps.splice(faceSnapIndex, 1);
        } else {
            console.error('FaceSnap not found');
        }
    }
}