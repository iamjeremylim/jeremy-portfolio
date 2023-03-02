import Profile from "./Profile";
import Filter from "./Filter";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Profile />
      <main className="main">
        <Filter />
      </main>
      <Footer />
    </>
  );
}
