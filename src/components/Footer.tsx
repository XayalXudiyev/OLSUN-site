import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/olsunevents" },
    { icon: Linkedin, href: "https://linkedin.com/company/olsunevents" },
    { icon: Facebook, href: "https://facebook.com/olsunevents" },
  ];

  const quickLinks = [
    { label: t("home"), href: "/", isRoute: true },
    { label: t("about-us"), href: `/${locale}#about`, isRoute: false },
    { label: t("services"), href: `/${locale}/services`, isRoute: true },
    { label: t("contact"), href: `/${locale}#contact`, isRoute: false },
  ];

  const supportLinks = [
    { label: t("help-center"), href: "#" },
    { label: t("pricing"), href: "/pricing", isRoute: true },
    { label: t("terms-of-service"), href: "#" },
    { label: t("privacy-policy"), href: "#" },
  ];

  const contactInfo = [
    { label: t("email"), value: "info@olsunevents.com" },
    { label: t("phone"), value: "+994 10 417 71 32" },
    { label: t("address"), value: "Baku, Azerbaijan" },
  ];

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-[24px] mb-3">Olsun</h3>
            <p className="text-sm text-[#9CA3AF] mb-6">
              Your partner in seamless event management
            </p>
            <div className="flex gap-4 justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6366F1] transition-colors"
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-[16px] mb-4 font-semibold">
              {t("quicks-links")}
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-[16px] mb-4 font-semibold">
              {t("support")}
            </h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-[16px] mb-4 font-semibold">
              {t("contacts")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#D1D5DB]">
              {contactInfo.map((contact) => (
                <p key={contact.label} className="break-words">
                  <span className="font-medium">{contact.label}:</span>{" "}
                  {contact.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#374151] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} Olsun. {t("all-rights-reserved")}
          </p>
          <p className="text-xs md:text-sm text-[#9CA3AF]">
            {t("supported-by")}
          </p>
        </div>
      </div>
    </footer>
  );
}
