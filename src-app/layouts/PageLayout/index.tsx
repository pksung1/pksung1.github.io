import React from "react";
import Navbar from "../Navbar";


const PageLayout = ({children}: React.PropsWithChildren) => {

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="pt-4 px-2 max-w-screen-laptop w-full">
        {children}
      </main>
    </div>
  )
}

export default PageLayout;