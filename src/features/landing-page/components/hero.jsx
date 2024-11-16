import { Link } from "react-router-dom";
import heroImg from "../../../assets/hero.png";
import Button from "../../../components/Button.jsx";

export default function Hero() {
  return (
    <section className="container mx-auto grid grid-cols-2 items-center px-4 md:px-0 pt-16 md:pt-0 min-h-screen">
      <div className="col-span-2 md:col-span-1">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Smart Waste Management Solutions with AI
          </h1>
          <p className="text-base md:text-lg font-medium">
            Recycle and manage waste effortlessly with the help of AI.
          </p>
          <p className="text-base md:text-lg font-medium">
            Boost effectiveness, reduce waste, and contribute to a cleaner
            environment!
          </p>
        </div>

        <div className="w-1/2 md:w-1/4 mt-8">
          <Link to="/login">
            <Button variant="success" fullWidth>Get Started</Button>        
          </Link>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}
