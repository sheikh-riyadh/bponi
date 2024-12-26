import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { LuSearch } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Header = () => {
  return (
    <header className="sticky top-0 bg-pg">
      <nav className="my_container">
        <div className="flex items-center justify-between gap-10 border-b border-primary/15 ">
          <div className="flex items-center gap-3 py-4">
            <div>
              <img className="w-12" src="/orig.svg" alt="logo" />
            </div>
            <div className="flex items-center gap-3 w-full">
              <div className="flex items-center bg-white p-2.5 rounded-2xl border-2 border-primary/20 w-[390px]">
                <LuSearch className="text-3xl" />
                <Input
                  className="bg-transparent text-lg text-primary p-0"
                  placeholder="Найти в ресторане"
                />
              </div>
              <div className="flex items-center gap-x-2 bg-btn text-primary font-semibold py-2.5 px-5 rounded-2xl border-2 border-[#D2D0CC] text-lg">
                <FaLocationArrow />
                <span>Enter delivery address</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center text-primary font-medium">
              <HiOutlineGlobeAlt className="text-2xl" />
              <span>English</span>
            </div>
            <Button className="bg-primary/10 px-7 py-3 text-lg">Log in</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
