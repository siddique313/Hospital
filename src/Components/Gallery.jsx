import img1 from "../assets/machine2.jpg";
import img4 from "../assets/machine5.jpg";
import img5 from "../assets/machine6.jpg";
import img6 from "../assets/machine77.jpg";
import img7 from "../assets/machine8.jpg";
import img8 from "../assets/machine9.jpg";
function Gallery() {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center p-4 mt-5 text-black text-3xl">
        <h1 className="font-serif">Gallery</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <img className="w-full object-cover h-60" src={img1} />

        <img className="w-full object-cover h-60" src={img4} />
        <img className="w-full object-cover h-60" src={img5} />
        <img className="w-full object-cover h-60" src={img6} />
        <img className="w-full object-cover h-60" src={img7} />
        <img className="w-full object-cover h-60" src={img8} />
      </div>
    </div>
  );
}

export default Gallery;
