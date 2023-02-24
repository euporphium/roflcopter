import { useEffect, useRef } from 'react';

const Y_OFFSET = 0.075;
const FONT_SIZE_SCALE = 0.075;

export default function Meme({
  imageUrl,
  topText,
  bottomText,
  topTextColor,
  bottomTextColor,
  scale = 1,
  rotate = false,
  mirrorX = false,
  mirrorY = false,
}: MemeProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      if (!ref.current) return;

      const canvas = ref.current!;

      const height = image.naturalHeight * scale;
      const width = image.naturalWidth * scale;
      const yOffset = height * Y_OFFSET;
      const fontSize = Math.floor(width * FONT_SIZE_SCALE);

      // Configure Canvas
      canvas.height = height;
      canvas.width = width;

      const ctx = canvas.getContext('2d')!;

      // Scale
      // ctx.scale(2, 2);

      // Mirror-X
      if (mirrorX) {
        ctx.scale(-1, 1);
        ctx.translate(-width, 0);
      }

      // Mirror-Y
      if (mirrorY) {
        ctx.scale(1, -1);
        ctx.translate(0, -height);
      }

      // if (rotation == 90) {
      //   ctx.rotate((90 * Math.PI) / 180);
      //   ctx.translate(0, -height);
      // }

      if (rotate) {
        ctx.rotate((180 * Math.PI) / 180);
        ctx.translate(-width, -height);
      }

      // if (rotation == 270) {
      //   ctx.rotate((270 * Math.PI) / 180);
      //   ctx.translate(-width, 0);
      // }

      ctx.drawImage(image, 0, 0, width, height);

      ctx.restore();

      // Configure Text
      ctx.textAlign = 'center';
      ctx.font = `${fontSize}px Comic Sans MS`;
      ctx.lineWidth = 4;

      // Top Text
      if (topText) {
        ctx.textBaseline = 'top';
        ctx.strokeStyle = topTextColor;
        ctx.fillStyle = topTextColor;

        ctx.strokeText(topText, width / 2, yOffset);
        ctx.fillText(topText, width / 2, yOffset);
      }

      // Bottom Text
      if (bottomText) {
        ctx.textBaseline = 'bottom';
        ctx.strokeStyle = bottomTextColor;
        ctx.fillStyle = bottomTextColor;

        ctx.strokeText(bottomText, width / 2, height - yOffset + 15);
        ctx.fillText(bottomText, width / 2, height - yOffset + 15);
      }
    };

    image.src = imageUrl;
  }, [
    imageUrl,
    topText,
    bottomText,
    topTextColor,
    bottomTextColor,
    scale,
    rotate,
    mirrorX,
    mirrorY,
  ]);

  return <canvas ref={ref} className="mx-auto max-w-[90vw] sm:my-20" />;
}

interface MemeProps {
  imageUrl: string;
  topText?: string;
  bottomText?: string;
  topTextColor: string;
  bottomTextColor: string;
  scale?: number;
  rotate?: boolean;
  mirrorX?: boolean;
  mirrorY?: boolean;
}
