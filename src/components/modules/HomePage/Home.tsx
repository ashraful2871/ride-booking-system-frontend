import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Sparkles, Car, Users, DollarSign, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="mb-12">
      {/* 1. Hero Banner */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-l to-purple-900 rounded-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <Sparkles className="h-5 w-5 animate-pulse" />
              Welcome to Ride Management System
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-foreground">
              Book Rides, Manage Drivers, Track Earnings 🚗
            </h1>
            <p className="text-white max-w-xl text-base sm:text-lg">
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
                  //variant="outline"
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How it Works */}
      <section className="py-20 container mx-auto px-6 text-center space-y-12">
        <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-2xl shadow-lg">
            <Car className="h-10 w-10 mx-auto text-blue-400" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Book a Ride
            </h3>
            <p className="text-muted-foreground">
              Choose your destination and book a ride instantly.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-2xl shadow-lg">
            <Users className="h-10 w-10 mx-auto text-green-400" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Assign Driver
            </h3>
            <p className="text-muted-foreground">
              We’ll match you with the nearest available driver.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-2xl shadow-lg">
            <MapPin className="h-10 w-10 mx-auto text-yellow-400" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Track Ride
            </h3>
            <p className="text-muted-foreground">
              Track your ride in real-time until you arrive safely.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Service Highlights */}
      <section className="py-20 bg-gradient-to-l to-purple-900 rounded-xl">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-bold text-foreground">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-muted rounded-2xl">
              <DollarSign className="h-10 w-10 mx-auto text-green-400" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Earnings Tracking
              </h3>
              <p className="text-muted-foreground">
                Monitor and optimize your driver’s earnings with ease.
              </p>
            </div>
            <div className="p-6 bg-muted rounded-2xl">
              <Users className="h-10 w-10 mx-auto text-blue-400" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Driver Management
              </h3>
              <p className="text-muted-foreground">
                Manage drivers, assign rides, and check performance.
              </p>
            </div>
            <div className="p-6 bg-muted rounded-2xl">
              <Car className="h-10 w-10 mx-auto text-yellow-400" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Seamless Booking
              </h3>
              <p className="text-muted-foreground">
                Easy and quick booking process for all customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customer Testimonials */}
      <section className="py-20 container mx-auto px-6 text-center space-y-12">
        <h2 className="text-3xl font-bold text-foreground">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-2xl">
            <p className="italic text-muted-foreground">
              "Super easy to book rides and track everything. Highly
              recommended!"
            </p>
            <h4 className="mt-4 font-semibold text-foreground">- Sarah K.</h4>
          </div>
          <div className="bg-muted p-6 rounded-2xl">
            <p className="italic text-muted-foreground">
              "The best ride management platform I’ve ever used!"
            </p>
            <h4 className="mt-4 font-semibold text-foreground">- James L.</h4>
          </div>
          <div className="bg-muted p-6 rounded-2xl">
            <p className="italic text-muted-foreground">
              "Smooth operations and reliable drivers every time."
            </p>
            <h4 className="mt-4 font-semibold text-foreground">- Maria R.</h4>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 bg-gradient-to-l to-purple-900 text-center rounded-xl">
        <h2 className="text-3xl font-bold text-foreground">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Book rides, manage drivers, and grow your transport business today!
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link to="/booking-ride">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90"
            >
              Book a Ride
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Join as Driver
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
