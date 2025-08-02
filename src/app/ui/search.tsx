import Input from "./input";
import Button from "./button";


function Search() {
  return (
    <form action="" className="flex gap-[10px] flex-1 ml-[60px]">
      <Input placeholder="Search Products, brands and categories" />
      <Button type="submit" className="bg-secondary-100 cursor-pointer hover:bg-secondary text-white px-4 py-2 rounded-[4px] shadow-btnShadow">Search</Button>
    </form>
  );
}


export default Search


