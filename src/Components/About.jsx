import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgreen",
        height: "180px",
      }}
    >
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignSelf: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "30px", marginBottom: "20px" }}>
          <h1>ABOUT US</h1>
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste a
          quisquam enim perferendis corporis pariatur repellat vitae modi
          eligendi obcaecati quasi praesentium aut odit voluptas facilis.
          Voluptate facilis quis, a impedit sequi minus ipsum cupiditate quo!
          Eligendi dolorem error impedit, soluta quam, mollitia aspernatur quos
          fugit omnis quaerat voluptatem labore odio maxime debitis expedita,
          veritatis ex? Quo saepe libero vel quis, praesentium omnis nihil
          soluta natus nobis iusto deleniti.
        </p>
      </div>
    </div>
  );
};

export default About;
