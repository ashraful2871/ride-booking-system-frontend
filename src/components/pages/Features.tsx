import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Car, Users, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Car className="h-8 w-8 text-primary mb-2" />,
      title: "Reliable Rides",
      description:
        "Ensure safe, punctual, and comfortable rides for every rider.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600 mb-2" />,
      title: "Driver Management",
      description:
        "Easily manage drivers, approve new drivers, and track performance.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600 mb-2" />,
      title: "24/7 Availability",
      description:
        "Book rides anytime with our system available round the clock.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600 mb-2" />,
      title: "Secure Payments",
      description:
        "Safe and fast payment system integrated for all transactions.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Key Features
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our ride booking system offers a seamless experience for riders,
            drivers, and admins with powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              {feature.icon}
              <CardTitle className="text-xl font-semibold mb-2">
                {feature.title}
              </CardTitle>
              <CardContent className="text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
