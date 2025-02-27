import img from "../assets/images/main2.jpeg";
function HomeScreenImage() {
  return (
    <div className="p-5">
      <img className="w-full h-[530px] object-cover mb-8" src={img} alt="" />
    </div>
  );
}

export default HomeScreenImage;
