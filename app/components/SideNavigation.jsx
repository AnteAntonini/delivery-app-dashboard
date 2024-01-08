import Link from "next/link";

export default function SideNavigation() {
  const navigation = [
    {
      name: "Orders",
      href: "/orders",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Order History",
      href: "/order-history",
    },
    {
      name: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="h-screen w-1/4 bg-white ">
      <div className="p-6 bg-orange-400">
        <h1 className="text-white text-2xl font-semibold">Delivery App</h1>
      </div>
      <ul className="text-black pl-6">
        {navigation.map((navItem) => (
          <li key={navItem} className="my-5 text-lg cursor-pointer">
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
