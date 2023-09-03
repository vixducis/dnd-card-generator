import { Image, Text } from "react-konva";
import weightUrl from "../../assets/weight.png";

type WeightProps = {
  wrapperWidth: number;
  wrapperHeight: number;
  offsetX: number;
  offsetY: number;
};

const getWidth = (props: WeightProps) => props.wrapperWidth / 6;
const getX = (props: WeightProps) =>
  (5 * props.wrapperWidth) / 12 + props.offsetX;
const getY = (props: WeightProps) =>
  props.wrapperHeight + props.offsetY - (13 * props.wrapperWidth) / 60;

export function WeightImage(props: WeightProps) {
  const img = new window.Image();
  img.src = weightUrl;

  return (
    <Image
      image={img}
      width={getWidth(props)}
      height={getWidth(props)}
      x={getX(props)}
      y={getY(props)}
    />
  );
}

export function WeightText(props: WeightProps & { text: string }) {
  return (
    <Text
      text={props.text}
      x={getX(props)}
      y={getY(props) + props.wrapperWidth / 50}
      width={getWidth(props)}
      height={getWidth(props)}
      fill="white"
      fontStyle="bold"
      align="center"
      verticalAlign="middle"
      fontSize={16}
    />
  );
}
