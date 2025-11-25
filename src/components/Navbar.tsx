import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="px-3 py-1 rounded border border-gray-500 dark:border-gray-300">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
