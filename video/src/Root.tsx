import {Composition} from 'remotion';
import {LogoIntro} from './LogoIntro';

export const Root = () => (
  <Composition
    id="LogoIntro"
    component={LogoIntro}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
  />
);
