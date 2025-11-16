"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("get-in-touch");

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
    <section
      id="contact"
      className="px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20 pt-8 md:pt-12 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative bg-gradient-to-br from-primary to-primary rounded-3xl p-6 md:p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {t("contact-information")}
              </h3>
              <p className="text-teal-100 mb-6 md:mb-8 text-sm md:text-base">
                {t("description")}
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <a
                    href="tel:+994104177132"
                    className="text-teal-100 hover:underline cursor-pointer text-sm md:text-base"
                  >
                    +994 10 417 71 32
                  </a>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <a
                    href="mailto:info@olsunevents.com"
                    className="text-teal-100 hover:underline cursor-pointer text-sm md:text-base break-all"
                  >
                    info@olsunevents.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <p className="text-teal-100 text-sm md:text-base">
                    Baku, Azerbaijan
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-16 -right-16 w-32 h-32 md:w-48 md:h-48 bg-teal-400/20 rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <Label htmlFor="name">{t("your-name")}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t("enter-your-name")}
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
                  <Label htmlFor="email">{t("your-email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("enter-your-email")}
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
                  <Label htmlFor="phone">{t("your-phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("enter-your-phone")}
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
                  <Label htmlFor="company">{t("your-company")}</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder={t("enter-your-company")}
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
                <Label htmlFor="message">{t("your-message")}</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="border border-primary/10"
                  placeholder={t("enter-your-message")}
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
                className="bg-primary hover:bg-primary/80 text-white px-6 md:px-8 py-3 rounded-lg font-medium w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : t("send-message")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
