export default function Header() {
  const ourNav = [
    { name: "Register", href: "", id: 0 },
    { name: "Skaters", href: "", id: 1 },
    { name: "Events", href: "", id: 3 },
    { name: "Sponsors", href: "", id: 4 },
  ];
  return (
    <header className="bg-black/90 shadow-lg w-full text-white p-4 flex items-center justify-between">
      <img
        src="./images/boarding.webp"
        alt="Black and white skateboard with grafitti, image by ChatGPT created by Davonne Vigil  "
        className="w-20 shadow-md shadow-white"
      />

      <ul className="hidden md:flex gap-10">
        {ourNav.map((item) => (
          <li
            key={item.id}
            className="font-bold text-xl hover:bg-black/50 p-2 hover:scale-110 transition-all duration-300 ease-in-out  cursor-pointer  "
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <button className="font-mono text-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 shadow-xl shadow-black bg-white text-black  rounded p-2">
        Get Tickets
      </button>
    </header>
  );
}
