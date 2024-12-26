import { FaArrowLeft } from "react-icons/fa";
import Button from "../components/common/Button";
import { sidebar } from "../data/sidebar";

const Sidebar = () => {
  return (
    <aside className="sticky -top-24 -z-10 pr-10 pt-5 w-64">
      <ul className="flex flex-col">
        <li>
          <Button className="flex items-center gap-3 text-lg bg-white">
            <FaArrowLeft />
            <span>All Restaurants</span>
          </Button>
        </li>
        <li className="mt-12">
          <Button className="bg-transparent text-start text-2xl">
            <span>Menu</span>
          </Button>
        </li>
        {sidebar.map(({ name }) => (
          <li key={name}>
            <Button className="text-start p-4 bg-transparent text-lg">{name}</Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
