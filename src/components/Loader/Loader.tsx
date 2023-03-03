import PulseLoader from "react-spinners/PulseLoader";
import scss from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={scss.Overlay}>
      <PulseLoader color="#4A56E2" size={30} aria-label="Loading Spinner" />
    </div>
  );
};
