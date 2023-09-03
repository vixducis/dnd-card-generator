import { Item } from "../../types";
import { ItemType } from "../components/ItemType";
import { PriceImage } from "../components/Price";
import { WeightImage } from "../components/Weight";

interface ImageLayerProps {
  wrapperHeight: number;
  wrapperWidth: number;
  offsetX: number;
  offsetY: number;
  item: Item;
}

export function ImageLayer({
  wrapperHeight,
  wrapperWidth,
  offsetX,
  offsetY,
  item,
}: ImageLayerProps) {
  return (
    <>
      <WeightImage
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
      />
      <PriceImage
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
      />
      <ItemType
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
        type={item.type}
      />
    </>
  );
}
