import { Link } from "react-router-dom";
import styles from "./Page404.module.scss";
import { useTranslation } from "react-i18next";

export const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.background}>
      <div className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>{t("page404.title")}</h2>
        <p className={styles.errorText}>{t("page404.text")}</p>
        <Link className={styles.backHomeLink} to="/">
          {t("buttons.toHome")}
        </Link>
      </div>
    </div>
  );
};
