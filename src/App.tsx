import { useEffect, useState } from "react";
import { Nav } from "./Components/Navbar/Navbar.tsx";
import { Footer } from "./Components/Footer/Footer.tsx";
import { Home } from "./Components/Home/Home.tsx";
import { Technologies } from "./Components/Technologies/Technologies.tsx";
import { Contact } from "./Components/Contact/Contacts.tsx";
import { Projects } from "./Components/Projects/Projects.tsx";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import { Timeline } from "./Components/Timeline/index.ts";

export function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader
            color={"#9067C6"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav />

          <Home />
          {/**<About />**/}
          <Timeline />
          <Technologies />
          <Projects />
          <Contact />

          <Footer />
        </div>
      )}
    </>
  );
}
