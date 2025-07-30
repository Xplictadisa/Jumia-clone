import Input from "./input";
import Button from "./button";


function Search() {
  return (
    <form action="" className="flex gap-[10px] flex-1 ml-[80px]">
      <Input placeholder="Search Products, brands and categories" />
      <Button type="submit">Search</Button>
    </form>
  );
}


export default Search


