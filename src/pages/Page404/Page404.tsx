import { Link } from "react-router-dom";
import scss from "./Page404.module.scss";
import { useTranslation } from "react-i18next";

export const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div className={scss.background}>
      <div className={scss.errorContainer}>
        <h2 className={scss.errorTitle}>{t("page404.title")}</h2>
        <p className={scss.errorText}>{t("page404.text")}</p>
        <Link className={scss.backHomeLink} to="/">
          {t("buttons.toHome")}
        </Link>
      </div>
    </div>
  );
};
