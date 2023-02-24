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
    <main className="min-h-screen bg-zinc-900 px-4 py-6 text-zinc-500">
      <h1 className="mb-2 text-center text-3xl">Meme Generator</h1>
      <form className="auto mx-auto max-w-6xl">
        <div className="flex flex-col">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            id="imageUrl"
            {...register('imageUrl')}
            className="rounded bg-zinc-300 px-2 py-1"
          />
        </div>

        <div className="my-4 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              id="topText"
              {...register('topText')}
              className="rounded bg-zinc-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="topTextColor">Top Text Color</label>
            <input
              type="text"
              id="topTextColor"
              {...register('topTextColor')}
              className="rounded bg-zinc-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              id="bottomText"
              {...register('bottomText')}
              className="rounded bg-zinc-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bottomTextColor">Bottom Text Color</label>
            <input
              type="text"
              id="bottomTextColor"
              {...register('bottomTextColor')}
              className="rounded bg-zinc-300 px-2 py-1"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="scale">Scale</label>
          <input
            type="number"
            step={0.01}
            id="scale"
            {...register('scale')}
            className="rounded bg-zinc-300 px-2 py-1"
          />
        </div>

        <div className="my-4 flex justify-around">
          <div className="flex gap-4">
            <label htmlFor="mirrorX">Mirror X</label>
            <input type="checkbox" id="mirrorX" {...register('mirrorX')} />
          </div>
          <div className="flex gap-4">
            <label htmlFor="mirrorY">Mirror Y</label>
            <input type="checkbox" id="mirrorY" {...register('mirrorY')} />
          </div>
          <div className="flex gap-4">
            <label htmlFor="rotate">Rotate</label>
            <input type="checkbox" id="rotate" {...register('rotate')} />
          </div>
        </div>
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
