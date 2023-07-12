"use client";
import { FC, useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import Container from "@/components/ui/Container";
import CartItem from "@/components/cart/CartItem";
import Summary from "@/components/cart/Summary";

const CartPage: FC = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { items } = useCart();

  if (!isMounted) return null;
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {items.length === 0 && (
                <p className="text-neutral-500">No items added to cart</p>
              )}
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
