import img from "../assets/images/main3.jpg";
function HomeScreenImage() {
  return (
    <div className="p-5">
      <img
        className="w-full sm:h-[530px] h-96 object-cover mb-8"
        src={img}
        alt=""
      />
    </div>
  );
}

export default HomeScreenImage;
