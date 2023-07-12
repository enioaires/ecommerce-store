"use client";
import { FC } from "react";
import { Product } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products";
import NoResults from "./ui/NoResults";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<ProductListProps> = ({ title, items }) => {
  const { data } = useQuery({
    //@ts-ignore
    queryKey: ["get-products"],
    queryFn: getProducts,
    initialData: items,
  });
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data?.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
