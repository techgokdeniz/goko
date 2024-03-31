import ThemeSwitcher from "@/components/base/theme-switcher";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <section className="border hpx text-black dark:text-white">
      <div className="container flex justify-between py-5">
        <h1>{t("title")}</h1>
        <ThemeSwitcher />
      </div>
    </section>
  );
}
