import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");

    toast.success("Message Sent Successfully");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions or need support? Reach out to us and we’ll get back
            to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <MapPin className="h-5 w-5 text-primary" /> Our Office
              </CardTitle>
              <CardContent className="text-muted-foreground">
                123 Ride St, Dhaka, Bangladesh
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <Phone className="h-5 w-5 text-green-600" /> Phone
              </CardTitle>
              <CardContent className="text-muted-foreground">
                +880 1234 567890
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <Mail className="h-5 w-5 text-blue-600" /> Email
              </CardTitle>
              <CardContent className="text-muted-foreground">
                support@ridebooking.com
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full mt-2">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
