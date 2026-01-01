import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className=" relative max-w-110">
      <Input
        type="text"
        placeholder="Search for a location..."
        className=" bg-white rounded-full py-5 pl-12 border-none"
      />
      <div className=" absolute left-3 top-2 text-primary-gray">
        <Search />
      </div>
      <Button
        className=" absolute right-0 bg-primary-purple rounded-full px-8 py-5 cursor-pointer hover:bg-primary-purple/80 duration-300
    text-white!"
      >
        Continue
      </Button>
    </div>
  );
}
