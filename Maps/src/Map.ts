interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private map: google.maps.Map;

  constructor(elmentId: string) {
    this.map = new google.maps.Map(document.getElementById(elmentId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addNewMarker(mappable: Mappable): void {
    
    const marker = new google.maps.Marker({
      position: mappable.location,
      map: this.map,
    });
    marker.addListener('click',()=>{
        const infoWindow = new google.maps.InfoWindow({
            content:mappable.markerContent();
        })
        infoWindow.open(this.map,marker);
    })
  }
}
