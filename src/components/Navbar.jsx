import "@fortawesome/fontawesome-free/css/all.min.css";

const navLink = [
 
  {
    name: "Store",
    href: "#"
  },
  {
    name: "Mac",
    href: "#"
  },
  {
    name: "iPad",
    href: "#"
  },
  {
    name: "iPhone",
    href: "#"
  },
  {
    name: "Watch",
    href: "#"
  },
  {
    name: "Vision",
    href: "#"
  },
  {
    name: "AirPods",
    href: "#"
  },
  {
    name: "TV & Home",
    href: "#"
  },
  {
    name: "Entertainment",
    href: "#"
  },
  {
    name: "Accessories",
    href: "#"
  },
  {
    name: "Support",
    href: "#"
  },
  
];
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 ">
      <div className="container mx-auto flex items-center justify-between p-2">
      <a href="#" className="text-xl">
          <i className="fa-brands fa-apple"></i>
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {navLink.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:opacity-70">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 text-lg">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
          <button className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}   
export default Navbar;