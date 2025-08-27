import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a ride?",
      answer:
        "You can book a ride by selecting your pickup and destination locations, choosing a driver, and confirming the ride. Our system will notify the driver immediately.",
    },
    {
      question: "Can I cancel my ride?",
      answer:
        "Yes, you can cancel a ride from the dashboard before the driver accepts it. Cancellations after acceptance may incur a small fee.",
    },
    {
      question: "How are fares calculated?",
      answer:
        "Fares are calculated based on distance, estimated time, and the type of vehicle you choose. Taxes and fees may also apply.",
    },
    {
      question: "How do I become a driver?",
      answer:
        "You can apply to become a driver by submitting your documents and completing our verification process. Once approved, you can start accepting rides.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "Yes, all payments are processed through secure, encrypted gateways. Your payment information is never shared with third parties.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our ride booking system.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <CardTitle className="flex justify-between items-center text-lg font-medium">
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </CardTitle>
              {openIndex === index && (
                <CardContent className="text-muted-foreground mt-2">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
