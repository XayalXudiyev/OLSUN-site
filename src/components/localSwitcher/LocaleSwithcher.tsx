"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";

export default function LocaleSwitcher() {
  const locale: string = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const onSelectChange = (nextLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === locale) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    router.replace(`/${segments.join("/")}`);
  };

  const localeLabels: Record<string, string> = {
    az: "AZ",
    en: "EN",
    ru: "RU",
  };

  if (!locale) return null;

  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
      <SelectTrigger className=" border-primary transition-all data-[size=default]:h-8 px-2 duration-200 [&>svg]:opacity-100 [&>svg]:data-[state=open]:rotate-180">
        <span className="">{localeLabels[locale]}</span>
      </SelectTrigger>
      <SelectContent className="shadow-lg border border-gray-200 min-w-20 bg-white">
        <SelectGroup>
          {Object.entries(localeLabels).map(([code, label]) => (
            <SelectItem
              key={code}
              value={code}
              className={`cursor-pointer transition-colors duration-150 hover:bg-gray-50 focus:bg-primary/10 focus:text-primary data-highlighted:bg-primary/10 data-highlighted:text-primary ${
                code === locale
                  ? "bg-primary/15 text-primary font-medium"
                  : "text-gray-700"
              }`}
            >
              <div className="flex gap-x-2 items-center ">
                <Image
                  src={`/flags/${code}.svg`}
                  alt={code}
                  width={24}
                  height={24}
                />
                <span className="leading-4 text-base">{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
