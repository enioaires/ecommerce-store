"use client";
import PreviewModal from "@/components/PreviewModal";
import { FC, useEffect, useState } from "react";

const ModalProvider: FC = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
