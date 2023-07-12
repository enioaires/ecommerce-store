"use client";
import { FC, MouseEventHandler } from "react";
import { Product } from "../../../types/types";
import Image from "next/image";
import { Button } from "./Button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import PreviewModal from "../PreviewModal";
import { usePreviewModal } from "../../../hooks/usePreviewModal";
import { useCart } from "../../../hooks/useCart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { onOpen } = usePreviewModal();
  const { addItem } = useCart();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          alt="Product Image"
          src={data?.images?.[0]?.url}
          fill
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button variant={"product"} onClick={onPreview}>
              <Expand size={20} className="text-gray-600" />
            </Button>
            <Button variant={"product"} onClick={onAddToCart}>
              <ShoppingCart size={20} className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
