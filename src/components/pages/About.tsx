import { Car, Users, Globe } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary">
            About RideHub
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl">
            RideHub is your trusted ride booking management system designed to
            streamline operations for drivers, riders, and administrators. Our
            mission is to make urban transportation simple, safe, and efficient
            for everyone.
          </p>
        </div>

        {/* Features / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <Car className="mx-auto h-10 w-10 text-primary mb-4" />
            <CardTitle className="text-xl font-semibold mb-2">
              Reliable Rides
            </CardTitle>
            <CardContent className="text-muted-foreground">
              Our platform ensures you get safe and punctual rides, anytime,
              anywhere.
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <Users className="mx-auto h-10 w-10 text-green-600 mb-4" />
            <CardTitle className="text-xl font-semibold mb-2">
              Driver Management
            </CardTitle>
            <CardContent className="text-muted-foreground">
              Easily manage your drivers, track performance, and approve or
              suspend as needed.
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <Globe className="mx-auto h-10 w-10 text-blue-600 mb-4" />
            <CardTitle className="text-xl font-semibold mb-2">
              Global Access
            </CardTitle>
            <CardContent className="text-muted-foreground">
              Our system works seamlessly across all devices, giving you full
              control from anywhere.
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Join RideHub Today
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Sign up now to streamline your ride management, increase efficiency,
            and provide a better experience for riders and drivers alike.
          </p>
          <a
            href="/register"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
