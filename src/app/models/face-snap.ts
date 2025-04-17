export class FaceSnap {
  
    location?: string;
    id !: string;
    constructor(
   public title: string,
   public description: string,
   public imageUrl: string, public createdDate: Date, public snaps: number, public   title_button:string,
    public isSnapped: boolean = false,
  )
  {
    this.id=crypto.randomUUID().substring(0, 8);
    this.isSnapped = false;
  }

  public setLocation(location: string) {
    this.location = location;
  }
  getLocation() {              
    return this.location;
  }
  withLocation(location: string) {
    this.location = location;
    return this;
  }
    
  snap(): void {
    this.isSnapped = true;
    this.snaps++;
    this.title_button = 'Oops, un Snap!';
}

unsnap(): void {
    this.isSnapped = false;
    this.snaps--;
    this.title_button = 'Oh snap !';
}

}