"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export function Menu() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Начало", link: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Брутфорс атака", link: "/brute-force" },
    { name: "SQL инжекция", link: "/sql-injection" },
    { name: "XSS атака", link: "/xss" },
  ];

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-4 py-4">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  pathname === item.link
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
