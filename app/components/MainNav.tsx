"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Category } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/categories";

interface MainNavProps {
  categories: Category[];
}

const MainNav: FC<MainNavProps> = ({ categories }) => {
  const pathname = usePathname();

  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    initialData: categories,
  });

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
