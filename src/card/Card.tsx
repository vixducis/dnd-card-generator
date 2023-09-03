import { Layer, Rect, Stage } from "react-konva";
import { Item } from "../types";
import { ImageLayer } from "./layers/ImageLayer";
import { TextLayer } from "./layers/TextLayer";
import { Background } from "./components/Background";

const height = 600;
const width = height / 1.397;

interface CardProps {
  item: Item;
}

export function Card({ item }: CardProps) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect width={width} height={height} fill="black" />
      </Layer>
      <Layer>
        <Background wrapperHeight={height} wrapperWidth={width} />
      </Layer>
      <Layer>
        <ImageLayer
          wrapperHeight={height}
          wrapperWidth={width}
          offsetX={0}
          offsetY={0}
          item={item}
        />
      </Layer>
      <Layer>
        <TextLayer wrapperHeight={height} wrapperWidth={width} item={item} />
      </Layer>
    </Stage>
  );
}
