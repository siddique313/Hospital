import img1 from "../assets/machine2.jpg";
import img4 from "../assets/machine5.jpg";
import img5 from "../assets/machine6.jpg";
import img6 from "../assets/machine77.jpg";
import img7 from "../assets/machine8.jpg";
import img8 from "../assets/machine9.jpg";
function Gallery() {
  return (
    <div className="container mx-auto">
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          marginTop: "20px",
          color: "black",
          fontSize: "1.5rem",
        }}
      >
        <h1>Gallery</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          padding: "10px",
        }}
      >
        <img
          style={{ width: "100%", objectFit: "cover", height: "240px" }}
          src={img1}
        />

        <img
          style={{ width: "100%", objectFit: "cover", height: "240px" }}
          src={img4}
        />
        <img
          style={{ width: "100%", objectFit: "cover", height: "240px" }}
          src={img5}
        />
        <img
          style={{ width: "100%", objectFit: "cover", height: "240px" }}
          src={img6}
        />
        <img
          style={{ width: "100%", objectFit: "cover", height: "240px" }}
          src={img7}
        />
        <img
          style={{ width: "100%", objectFit: "cover", height: "240px" }}
          src={img8}
        />
      </div>
    </div>
  );
}

export default Gallery;
