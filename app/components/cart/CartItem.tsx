import { FC } from "react";
import { Product } from "../../../types/types";
import Image from "next/image";
import { Button } from "../ui/Button";
import { X } from "lucide-react";
import Currency from "../ui/Currency";
import { useCart } from "../../../hooks/useCart";

interface CartItemProps {
  data: Product;
}

const CartItem: FC<CartItemProps> = ({ data }) => {
  const { removeItem } = useCart();

  const onRemove = () => {
    removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images?.[0]?.url}
          alt="Product Image"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <Button variant={"product"} onClick={onRemove}>
            <X size={15} />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-2 border-l border-gray-200 pl-2">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
