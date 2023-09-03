import { Image, Text } from "react-konva";
import priceUrl from "../../assets/price.png";

type PriceProps = {
  wrapperWidth: number;
  wrapperHeight: number;
  offsetX: number;
  offsetY: number;
};

const getWidth = (props: PriceProps) => props.wrapperWidth / 6;
const getX = (props: PriceProps) => props.wrapperWidth / 20 + props.offsetX;
const getY = (props: PriceProps) =>
  props.wrapperHeight + props.offsetY - (13 * props.wrapperWidth) / 60;

export function PriceImage(props: PriceProps) {
  const img = new window.Image();
  img.src = priceUrl;

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

export function PriceText(props: PriceProps & { text: string }) {
  return (
    <Text
      text={props.text}
      x={getX(props)}
      y={getY(props)}
      width={getWidth(props)}
      height={getWidth(props)}
      fill="black"
      fontStyle="bold"
      align="center"
      verticalAlign="middle"
      fontSize={16}
    />
  );
}
