import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-lime-500 uppercase px-4 py-3 border-b border-stone-200 space-y-2 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        Pizza Italiano
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
