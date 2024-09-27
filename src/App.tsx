import { useEffect, useState } from "react";
import Nav from "./Components/Navbar.tsx";
import Footer from "./Components/Footer.tsx";
import { Home } from "./Components/Home/Home.tsx";
import { Technologies } from "./Components/Technologies.tsx";
import { About } from "./Components/About.tsx";
import { Projects } from "./Components/Projects.tsx";
import { MoveToTop } from "./Components/MoveToTop.tsx";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

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
          <MoveToTop />

          <Home />
          {/**<About />**/}
          <Technologies />
          <Projects />

          <Footer />
        </div>
      )}
    </>
  );
}
