"use client";
import { FC } from "react";
import { Billboard as BillboardType } from "../../types/types";

interface BillboardProps {
  billboardData: BillboardType;
}

const Billboard: FC<BillboardProps> = ({ billboardData }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${billboardData?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {billboardData?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
