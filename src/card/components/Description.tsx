import { Text } from "react-konva";

interface DescrptionProps {
  wrapperWidth: number;
  wrapperHeight: number;
  offsetX: number;
  offsetY: number;
  text: string;
}

export function Description({
  wrapperHeight,
  wrapperWidth,
  offsetX,
  offsetY,
  text,
}: DescrptionProps) {
  return (
    <Text
      text={text}
      width={(9 * wrapperWidth) / 10}
      height={wrapperHeight}
      fill="black"
      x={offsetX + wrapperWidth / 20}
      y={offsetY + wrapperWidth / 6}
      fontSize={wrapperWidth / 20}
      align="left"
    />
  );
}
