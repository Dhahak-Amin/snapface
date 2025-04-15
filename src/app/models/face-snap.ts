export class FaceSnap {
  
    location?: string;
    constructor(
   public title: string,
   public description: string,
   public imageUrl: string, public createdDate: Date, public snaps: number, public   title_button:string,
    public isSnapped: boolean = false,
  )
  {}

  public setLocation(location: string) {
    this.location = location;
  }
  getLocation() {              
    return this.location;
  }


  OnAddSnap(): string {
    if (this.isSnapped) {
      this.snaps--;
      this.isSnapped = false;
      this.title_button = 'Oh snap !';
      return this.title_button;
    } else {
      this.isSnapped = true;  
      this.snaps++;
      this.title_button = 'Oops, un Snap!'; 
      return this.title_button;
    }
    return ''; // Default return statement to handle all code paths
  }
      
  }
