import { FC } from "react";
import { getProducts } from "../../../../services/products";
import { getSizes } from "../../../../services/sizes";
import { getColors } from "../../../../services/colors";
import { getCategory } from "../../../../services/categories";
import Container from "@/components/ui/Container";
import Billboard from "@/components/Billboard";
import Filter from "@/components/category/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "@/components/category/MobileFilters";

interface pageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: FC<pageProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard billboardData={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;