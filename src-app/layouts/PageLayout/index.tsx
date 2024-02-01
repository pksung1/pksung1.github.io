import React, { HTMLAttributes } from "react";
import Navbar from "../Navbar";
import { cx } from "class-variance-authority";


const PageLayout = ({children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className={cx("pt-4 max-w-screen-laptop w-full", className)} {...props}>
        {children}
      </main>
    </div>
  )
}

export default PageLayout;