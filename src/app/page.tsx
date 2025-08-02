import Header from "./_components/header";
import Advert from "./_components/advert";
import RowOne from "./_components/rowOne";
import RowTwo from "./_components/rowTwo";
import RowThree from "./_components/rowThree";
import RowFour from "./_components/rowFour";
import RowFive from "./_components/rowFive";

export default function Home() {
  return (
    <div>
      <Advert />
      <Header />
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
      <RowFive />
      <div className="pb-[1000px]"></div>
    </div>
  );
}
