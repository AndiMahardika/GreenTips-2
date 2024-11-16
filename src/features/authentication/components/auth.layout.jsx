import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/bg_login.png';
import Button from '../../../components/Button.jsx';

export const AuthLayout = ({ children }) => {
  return (
      <main className="grid h-screen md:grid-cols-2">
          <section className="bg-primary-600 hidden md:flex flex-col justify-center items-center bg-primary">
            <div className="">
              <h1 className="font-bold text-5xl text-success">GreenTips</h1>
              <p className="text-lg text-white font-semibold">
                Smart waste management tips from AI for a cleaner environment!
              </p>
            </div>
            <img src={backgroundImage} alt="background" className="absolute bottom-0 left-0 w-80" />
          </section>
          <section className="flex items-center justify-center relative">
            <Link to="/" className="absolute top-2 left-2">
              <Button variant="success">Back</Button>
            </Link>
            {children}
          </section>
      </main>
  );
};