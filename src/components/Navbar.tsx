import ThemeToggle from "./ThemeToggle";
import {useNavigate} from 'react-router-dom'
type NavbarProps = {
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
  const navigate=useNavigate()
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-400 dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button onClick={()=>navigate("/")} className="px-3 py-1 rounded border border-stone-500 dark:border-stone-500 hover:opacity-30">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
