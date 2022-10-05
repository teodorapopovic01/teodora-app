import React from "react";

const PageLayout = ({
  ...props
}: React.ObjectHTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={"page-layout"}>
      {props.children}
    </div>
  );
};

export default PageLayout;
