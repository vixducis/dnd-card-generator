import { Item } from "../../types";
import { Description } from "../components/Description";
import { PriceText } from "../components/Price";
import { Title } from "../components/Title";
import { WeightText } from "../components/Weight";

interface TextLayerProps {
  wrapperHeight: number;
  wrapperWidth: number;
  offsetX?: number;
  offsetY?: number;
  item: Item;
}

export function TextLayer({
  wrapperHeight,
  wrapperWidth,
  offsetX = 0,
  offsetY = 0,
  item,
}: TextLayerProps) {
  return (
    <>
      <PriceText
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
        text={item.price}
      />
      <WeightText
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
        text={item.weight}
      />
      <Title
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
        text={item.title}
      />
      <Description
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        offsetX={offsetX}
        offsetY={offsetY}
        text={item.description}
      />
    </>
  );
}
