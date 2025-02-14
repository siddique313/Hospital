import img1 from "../assets/fb-blue.png";
import img2 from "../assets/mail.png";
import img3 from "../assets/instagram.png";
import img4 from "../assets/linkedin.png";
import img5 from "../assets/telephone.png";
import img6 from "../assets/pinterest.png";

export default function SocialApps() {
  return (
    <div>
      <div className=" text-center pt-5 border-t-2 border-[#333]">
        <p>Copyrights &copy; 2023 AL-Qaim Surgical | All rights reserved.</p>
        <div className="social-icons flex flex-row gap-2 justify-center mt-3">
          <img
            src={img1}
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
            }}
          />
          <img
            src={img2}
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
            }}
          />
          <img
            src={img3}
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
            }}
          />
          <img
            src={img4}
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
            }}
          />
          <img
            src={img5}
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
            }}
          />
          <img
            src={img6}
            style={{
              width: 20,
              height: 20,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
