import image from "../assets/image.jpeg";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        paddingTop: "5rem",
      }}
    >
      <img
        style={{
          width: "95%",
          height: "80vh",
        }}
        src={image}
        alt=""
      />
    </div>
  );
};

export default Home;
