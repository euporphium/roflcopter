import Meme from './components/Meme';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, watch } = useForm<Inputs>({
    defaultValues: {
      imageUrl: 'https://i.imgflip.com/1bij.jpg',
      topText: 'One does not simply',
      bottomText: 'create a meme',
      topTextColor: 'black',
      bottomTextColor: 'black',
      scale: 1,
      mirrorX: false,
      mirrorY: false,
      rotate: false,
    },
  });

  return (
    <main>
      <form>
        <label htmlFor="imageUrl">Image Url</label>
        <input type="text" id="imageUrl" {...register('imageUrl')} />

        <label htmlFor="topText">Top Text</label>
        <input type="text" id="topText" {...register('topText')} />

        <label htmlFor="bottomText">Bottom Text</label>
        <input type="text" id="bottomText" {...register('bottomText')} />

        <label htmlFor="topTextColor">Top Text Color</label>
        <input type="text" id="topTextColor" {...register('topTextColor')} />

        <label htmlFor="bottomTextColor">Top Text Color</label>
        <input
          type="text"
          id="bottomTextColor"
          {...register('bottomTextColor')}
        />

        <label htmlFor="scale">Scale</label>
        <input type="number" step={0.01} id="scale" {...register('scale')} />

        <label htmlFor="mirrorX">Mirror X</label>
        <input type="checkbox" id="mirrorX" {...register('mirrorX')} />

        <label htmlFor="mirrorY">Mirror Y</label>
        <input type="checkbox" id="mirrorY" {...register('mirrorY')} />

        <label htmlFor="rotate">Rotation</label>
        <input type="checkbox" id="rotate" {...register('rotate')} />
      </form>

      <Meme
        imageUrl={watch('imageUrl')}
        topText={watch('topText')}
        bottomText={watch('bottomText')}
        topTextColor={watch('topTextColor')}
        bottomTextColor={watch('bottomTextColor')}
        scale={watch('scale')}
        rotate={watch('rotate')}
        mirrorX={watch('mirrorX')}
        mirrorY={watch('mirrorY')}
      />
    </main>
  );
}

interface Inputs {
  imageUrl: string;
  topText: string;
  bottomText: string;
  topTextColor: string;
  bottomTextColor: string;
  scale: number;
  mirrorX: boolean;
  mirrorY: boolean;
  rotate: boolean;
}
