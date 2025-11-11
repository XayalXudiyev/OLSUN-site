"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", phone: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="p-20 bg-gray-50">
      <div className="max-w- mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We'll create high-quality linkable content and build at least 40
            high-authority links to each asset, paving the way for you to grow
            your rankings, improve brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="relative bg-linear-to-br from-primary to-primary rounded-3xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-teal-100 mb-8">
                Have questions or feedback? We'd love to hear from you
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5" />
                  <a
                    href="tel:+994104177132"
                    className="text-teal-100 hover:underline cursor-pointer"
                  >
                    +994 10 417 71 32
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:info@olsunevents.com"
                    className="text-teal-100 hover:underline cursor-pointer"
                  >
                    info@olsunevents.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5" />
                  <p className="text-teal-100">Baku, Azerbaijan</p>
                </div>
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-teal-400/20 rounded-full"></div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="border border-primary/10"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="border border-primary/10"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Your Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter your phone number"
                    className="border border-primary/10"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Your Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Enter your company"
                    className="border border-primary/10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="border border-primary/10"
                  placeholder="Write here your message 👋"
                />
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
