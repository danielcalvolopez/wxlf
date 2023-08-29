import { useTranslation as useTranslationI18n } from "react-i18next";

const useTranslation = () => {
  const { t, i18n } = useTranslationI18n();
  return {
    translate: t,
    i18n,
  };
};

export default useTranslation;
