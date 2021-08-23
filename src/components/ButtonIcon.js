import React from "react";

export const ButtonIcon = ({
  img,
  caption,
  action,
  className = "btn btn-primary"
}) => {
  return (
    <div className={`buttonicon ${className}`} onClick={() => action()}>
      <img src={img} alt='' />
      <div>{caption}</div>
    </div>
  );
};
