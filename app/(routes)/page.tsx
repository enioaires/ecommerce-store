import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import { FC } from "react";
import { getBillboard } from "../../services/billboards";
import { getProducts } from "../../services/products";
import ProductList from "@/components/ProductList";

const HomePage: FC = async () => {
  const billboard = await getBillboard("bbce3f18-828c-4cc2-a2b4-4e6cd17bf508");
  const products = await getProducts({ isFeatured: true });

  console.log(billboard);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboardData={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
