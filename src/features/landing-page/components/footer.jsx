import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="container mx-auto grid md:grid-cols-4 pt-4 md:pt-12 pb-6 px-4 md:px-0">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-2xl text-success md:mb-5">GreenTips</h3>
          <div className="text-base font-normal mb-3 md:mb-6">
            <p>Jalan Merpati No.87 A</p>
            <p>Yogyakarta, Depok Sleman</p>
            <p>Indonesia</p>
          </div>

          <div className="text-sm font-normal space-y-2">
            <p className="font-normal"><span className="font-bold">Phone:</span> 0858-5139-3874</p>
            <p className="font-normal"><span className="font-bold">Email:</span> andi.mahardika.mulya@gmail.com</p>
          </div>
        </div>

        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-2xl text-success md:mb-5">Usefull Links</h3>
          <ul className="text-base font-normal space-y-2">
            <li><a className="hover:text-success" href="#">Home</a></li>
            <li><a className="hover:text-success" href="#about">About Us</a></li>
            <li><a className="hover:text-success" href="#features">Features</a></li>
            <li><a className="hover:text-success" href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-2xl text-success md:mb-5">Our Services</h3>
          <ul className="text-base font-normal space-y-2">
            <li>AI-Generated Waste Tips</li>
            <li>Save AI Recommendations</li>
            <li>Manage Saved Tips</li>
            <li>View Collections</li>
          </ul>
        </div>

        <div className="flex flex-col-reverse md:pb-8">
          <ul className="flex gap-4">
            <li>
              <Link className="" to="https://www.facebook.com/andi.m.mulya.90">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt="" className="w-8"/>
              </Link>
            </li>
            <li>
              <Link className="" to="https://www.instagram.com/andimahardikamulya_/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png" alt="" className="w-8"/>
              </Link>
            </li>
            <li>
              <Link className="" to="https://x.com/AndiStudents">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/886px-X_logo_2023.svg.png" alt="" className="w-8"/>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center py-4 border-t">
        <p className="text-sm md:text-base font-light">
          © 2024 GreenTips. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
