import en from "./en.json";
import de from "./de.json";

const translations: Record<string, Record<string, any>> = { en, de };

export function t(locale: string | undefined, key: string): string {
  const keys = key.split(".");
  let value: any = translations[locale === "de" ? "de" : "en"];
  for (const k of keys) {
    value = value?.[k];
  }
  return typeof value === "string" ? value : key;
}
