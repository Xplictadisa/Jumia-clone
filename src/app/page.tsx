import Header from "./_components/header";
import Advert from "./_components/advert";
import Main from "./_components/main";

export default function Home() {
  return (
    <div>
      <Advert />
      <Header />
      <Main />
      <div className="pb-[1000px]"></div>
    </div>
  );
}
