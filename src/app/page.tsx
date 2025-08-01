import Header from "./_components/header";
import Advert from "./_components/advert";
import RowOne from "./_components/rowOne";
import RowTwo from "./_components/rowTwo";

export default function Home() {
  return (
    <div>
      <Advert />
      <Header />
      <RowOne />
      <RowTwo />
      <div className="pb-[1000px]"></div>
    </div>
  );
}
