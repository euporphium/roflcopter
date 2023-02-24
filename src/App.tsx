import { useForm } from 'react-hook-form';

interface Inputs {
  imageUrl: string;
  topText: string;
  bottomText: string;
  scale: number;
  mirrorX: boolean;
  mirrorY: boolean;
  rotate: boolean;
}

function App() {
  const { register, watch } = useForm<Inputs>({
    defaultValues: {
      imageUrl: 'https://i.imgflip.com/1bij.jpg',
      topText: 'One does not simply',
      bottomText: 'create a meme',
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

        <label htmlFor="scale">Scale</label>
        <input type="number" step={0.01} id="scale" {...register('scale')} />

        <label htmlFor="mirrorX">Mirror X</label>
        <input type="checkbox" id="mirrorX" {...register('mirrorX')} />

        <label htmlFor="mirrorY">Mirror Y</label>
        <input type="checkbox" id="mirrorY" {...register('mirrorY')} />

        <label htmlFor="rotate">Rotation</label>
        <input type="checkbox" id="rotate" {...register('rotate')} />
      </form>
    </main>
  );
}

export default App;
