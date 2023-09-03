import { Text } from "react-konva";

interface TitleProps {
  wrapperWidth: number;
  wrapperHeight: number;
  offsetX: number;
  offsetY: number;
  text: string;
}

export function Title({
  wrapperWidth,
  offsetX,
  offsetY,
  text
}: TitleProps) {
  return (
    <Text
      text={text}
      width={wrapperWidth}
      height={wrapperWidth / 10}
      fill="black"
      x={offsetX}
      y={offsetY + wrapperWidth / 20}
      fontFamily="MedievalSharp"
      fontSize={wrapperWidth / 14}
      align="center"
    />
  );
}
