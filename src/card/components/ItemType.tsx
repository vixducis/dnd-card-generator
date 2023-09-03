import { Image } from "react-konva";
import { ItemType } from "../../types";

interface ItemTypeProps {
  wrapperWidth: number;
  wrapperHeight: number;
  offsetX?: number;
  offsetY?: number;
  type: ItemType;
}

export function ItemType({
  wrapperWidth,
  wrapperHeight,
  offsetX = 0,
  offsetY = 0,
  type,
}: ItemTypeProps) {
  const img = new window.Image();
  img.src = type.url;
  return (
    <Image
      width={wrapperWidth / 6}
      height={wrapperWidth / 6}
      image={img}
      x= {wrapperWidth + offsetX - (13 * wrapperWidth) / 60}
      y={wrapperHeight + offsetY - (13 * wrapperWidth) / 60}
    />
  );
}
