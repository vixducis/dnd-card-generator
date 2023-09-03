import { Stage, Layer, Rect } from "react-konva";
import { Item } from "../types";
import { Background } from "./components/Background";
import { ImageLayer } from "./layers/ImageLayer";
import { TextLayer } from "./layers/TextLayer";
import { useRef } from "react";
import Konva from "konva";
import jsPDF from "jspdf";
import { Button } from "@chakra-ui/react";

interface CardsProps {
  cards: Item[];
  columns: number;
  rows: number;
}

export function Cards({ cards, columns, rows }: CardsProps) {
  const stageRef = useRef<Konva.Stage>(null);

  const cardHeight = 600;
  const cardWidth = cardHeight / 1.397;

  const height = cardHeight * rows;
  const width = cardWidth * columns;

  const offsetX = (idx: number) => (idx % columns) * cardWidth;
  const offsetY = (idx: number) => Math.floor(idx / columns) * cardHeight;

  return (
    <>
      <Button
      colorScheme="blue"
        onClick={() => {
          const stage = stageRef.current?.getStage();
          if (stage !== undefined) {
            var pdf = new jsPDF("landscape", "mm", [297, 210]);
            pdf.addImage(
              stage.toDataURL({ pixelRatio: 2 }),
              5,
              5,
              pdf.internal.pageSize.getWidth() - 10,
              pdf.internal.pageSize.getHeight() - 10
            );

            pdf.save("canvas.pdf");
          }
        }}
      >
        PDF
      </Button>
      <Stage width={width} height={height} ref={stageRef} className="hidden">
        <Layer>
          {cards.map((_card, idx) => (
            <Rect
              width={cardWidth}
              height={cardHeight}
              x={offsetX(idx)}
              y={offsetY(idx)}
              fill="black"
            />
          ))}
        </Layer>
        <Layer>
          {cards.map((_card, idx) => (
            <Background
              wrapperHeight={cardHeight}
              wrapperWidth={cardWidth}
              offsetX={offsetX(idx)}
              offsetY={offsetY(idx)}
            />
          ))}
        </Layer>
        <Layer>
          {cards.map((card, idx) => (
            <ImageLayer
              wrapperHeight={cardHeight}
              wrapperWidth={cardWidth}
              offsetX={offsetX(idx)}
              offsetY={offsetY(idx)}
              item={card}
            />
          ))}
        </Layer>
        <Layer>
          {cards.map((card, idx) => (
            <TextLayer
              wrapperHeight={cardHeight}
              wrapperWidth={cardWidth}
              offsetX={offsetX(idx)}
              offsetY={offsetY(idx)}
              item={card}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
