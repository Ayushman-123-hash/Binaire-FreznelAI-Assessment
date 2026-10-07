import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import StoreHome from "./pages/StoreHome";
import StoreAgeCheck from "./pages/StoreAgeCheck";
import StoreNewReleases from "./pages/StoreNewReleases";

import Signup from "./auth/Signup";

function App() {
  const path = window.location.pathname;

  // Firebase Signup Page
  if (path === "/signup" || path === "/signup/") {
    return (
      <div className="min-h-screen bg-[#1b2838]">
        <Header />
        <Signup />
        <Footer />
      </div>
    );
  }

  // Default page
  let Page = StoreHome;

  // Link 2 - Age Check
  if (
    path === "/agecheck/app/1091500/" ||
    path === "/agecheck/app/1091500"
  ) {
    Page = StoreAgeCheck;
  }

  // Link 3 - New Releases
  if (
    path === "/explore/new/" ||
    path === "/explore/new"
  ) {
    Page = StoreNewReleases;
  }

  return (
    <div className="min-h-screen bg-[#1b2838]">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;