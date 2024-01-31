import React from "react";
import Navbar from "../Navbar";


const PageLayout = ({children}: React.PropsWithChildren) => {

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default PageLayout;