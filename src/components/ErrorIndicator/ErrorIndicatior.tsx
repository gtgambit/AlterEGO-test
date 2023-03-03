import React from "react";

export const ErrorIndicator = ({ error = "" }) => {
  return (
    <p>
      Oops, something went wrong... <b>{error}</b>
    </p>
  );
};
