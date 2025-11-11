"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.email("Email is required"),
  company: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
});
export type FormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      toast.loading("Müraciətiniz göndərilir...", {
        id: "contact-form",
      });

      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Müraciətiniz uğurla göndərildi!", {
          id: "contact-form",
        });
        reset();
      } else {
        toast.error("Xəta baş verdi", {
          id: "contact-form",
          description: "Zəhmət olmasa yenidən cəhd edin.",
        });
      }
    } catch (error) {
      toast.error("Bağlantı xətası", {
        id: "contact-form",
        description: `${error || "İnternet bağlantınızı yoxlayın və yenidən cəhd edin."}`,
      });
    }
  };

  return (
    <section id="contact" className="p-20 pt-12 bg-gray-100">
      <div className="max-w- mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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

            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-teal-400/20 rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="border border-primary/10"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border border-primary/10"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Your Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border border-primary/10"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div>
                  <Label htmlFor="company">Your Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company"
                    className="border border-primary/10"
                    {...register("company")}
                  />
                  {errors.company && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.company.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="border border-primary/10"
                  placeholder="Write here your message 👋"
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
