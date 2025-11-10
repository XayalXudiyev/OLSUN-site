"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactInfoData = [
    {
      icon: Mail,
      label: "Email",
      value: "info@olsunevents.com",
      href: "mailto:info@olsunevents.com",
      color: "#6366F1",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+994 10 417 71 32",
      href: "tel:+994104177132",
      color: "#10B981",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Baku, Azerbaijan",
      href: null,
      color: "#3B82F6",
    },
    {
      icon: Linkedin,
      label: "Follow Us",
      value: "LinkedIn",
      href: "#",
      color: "#6366F1",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-[40px] text-[#111827] mb-4">Get in Touch</h2>
        <p className="text-lg text-[#6B7280] mb-12">
          Have questions or feedback? We'd love to hear from you
        </p>

        <div className="grid md:grid-cols-[60%_40%] gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Full Name <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-opacity-20"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Email Address <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@company.com"
                className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-opacity-20"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Your Company"
                className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-opacity-20"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Message <span className="text-[#EF4444]">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us what you're looking for..."
                className="w-full px-3 py-3 border border-[#E5E7EB] rounded-lg focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-opacity-20"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            {contactInfoData.map((contact) => (
              <div
                key={contact.label}
                className="bg-white rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <contact.icon
                  className="w-6 h-6"
                  style={{ color: contact.color }}
                />
                <div>
                  <p className="text-sm text-[#6B7280]">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-[#111827] hover:text-[#6366F1]"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-[#111827]">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
