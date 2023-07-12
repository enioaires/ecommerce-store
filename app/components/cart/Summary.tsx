"use client";
import { FC, useEffect } from "react";
import Currency from "../ui/Currency";
import { Button } from "../ui/Button";
import { useCart } from "../../../hooks/useCart";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

const Summary: FC = ({}) => {
  const { items, clearCart } = useCart();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      clearCart();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong, please try again");
    }
  }, [searchParams, clearCart]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location = response.data.url;
    },
  });

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-enter justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        variant={"icon"}
        size={"icon"}
        className="text-white w-full flex justify-center mt-6"
        onClick={() => mutate()}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
