import { Image } from "react-konva";
import backgroundUrl from "../../assets/background.png";

interface BackgroundProps {
  wrapperWidth: number;
  wrapperHeight: number;
  offsetX?: number;
  offsetY?: number;
}

const background = new window.Image();
background.src = backgroundUrl;

export function Background({
  wrapperHeight,
  wrapperWidth,
  offsetX = 0,
  offsetY = 0,
}: BackgroundProps) {
  const borderSize = wrapperWidth * 0.02;
  return (
    <Image
      image={background}
      width={wrapperWidth - 2 * borderSize}
      height={wrapperHeight - 2 * borderSize}
      x={borderSize + offsetX}
      y={borderSize + offsetY}
    />
  );
}
