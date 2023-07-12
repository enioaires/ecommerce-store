"use client";
import { FC, useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useRouter } from "next/navigation";

interface NavbarActionsProps {}

const NavbarActions: FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { items } = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        variant={"icon"}
        size={"icon"}
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-white text-sm font-medium">
          {items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
