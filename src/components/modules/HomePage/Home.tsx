import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Sparkles, Car } from "lucide-react";

const Home = () => {
  return (
    <section className="min-h-[80vh]   text-white flex items-center rounded-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
            <Sparkles className="h-5 w-5 animate-pulse" />
            Welcome to Ride Management System
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Book Rides, Manage Drivers, Track Earnings 🚗
          </h1>
          <p className="text-white/90 max-w-xl text-base sm:text-lg">
            Effortlessly manage your rides, drivers, and earnings. Your
            all-in-one ride booking dashboard for smooth operations and full
            control.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link to="/booking-ride">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90"
              >
                <Car className="mr-2 h-5 w-5" />
                Book a Ride
              </Button>
            </Link>
            <Link to="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Features
              </Button>
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        {/* <div className="flex-1 mt-8 md:mt-0">
          <img
            src="/images/ride-banner.png" // replace with your local ride booking illustration
            alt="Ride Booking Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
