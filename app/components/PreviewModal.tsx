"use client";
import { FC } from "react";
import { usePreviewModal } from "../../hooks/usePreviewModal";
import Modal from "./ui/Modal";
import Gallery from "./gallery";
import Info from "./Info";

const PreviewModal: FC = ({}) => {
  const { data, isOpen, onClose } = usePreviewModal();

  if (!data) return null;
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={data.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
