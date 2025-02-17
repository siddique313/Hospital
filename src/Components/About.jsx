function About() {
  return (
    <>
      <div className="grid grid-cols-3  gap-16 items-center justify-center mt-8">
        <div className="border-l-4 border-blue-800 ml-4">
          <div className="w-13 ml-2">
            <h1 className="font-extrabold">Welcome to </h1>
            <h1 className="font-extrabold ">Ali Haider</h1>
            <h1 className="font-extrabold "> Surgical</h1>
            <p>Your Complete Medical Equipment Solutions</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center self-center">
          <h1 className="font-extrabold ">About Us</h1>
          <p>
            M. Haider Surgical is a leading name in the medical industry,
            serving as both one of the biggest importers of medical equipment
            and Pakistans number one (#1) and largest manufacturing group of
            Hospital Furniture. With a rich history of excellence, we have been
            a prominent player in the healthcare sector for many years, offering
            a comprehensive range of medical equipment and furniture to cater to
            the diverse needs of hospitals and healthcare providers across
            Pakistan.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center self-center">
          <h1 className="font-extrabold">Importing Medical Excellence</h1>
          <p>
            {" "}
            We take pride in being a premier importer of top-quality medical
            equipment from around the world. Our extensive network allows us to
            source cutting-edge products from countries like the UK, USA, Japan,
            China, and others. From advanced Patient Monitors to life-saving
            Ventilators, from reliable CTG Machines to sophisticated Ultrasound
            Machines, we offer an exhaustive list of medical devices, including
            OT lights, OT Tables, Dialysis Units, and much more. Whether you
            need brand new or refurbished equipment, we have you covered.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center self-center px-96 ml-20 mt-10">
        <h1 className="font-extrabold ">Manufacturing Hospital Furniture</h1>
        <p>
          With three state-of-the-art manufacturing units in Lahore, M. Haider
          Surgical is dedicated to producing high-quality Hospital Furniture.
          Our large manufacturing capacity enables us to meet the demands of the
          healthcare industry efficiently. From Hospital Beds to Trolleys,
          Warmers to Autoclaves, we manufacture everything needed to furnish a
          hospital in a comprehensive range of materials, including metal,
          stainless steel, and fiber
        </p>
      </div>
    </>
  );
}

export default About;
