import {Composition} from 'remotion';
import {LogoIntro} from './LogoIntro';
import {PROMO_DURATION, PromoMotion} from './promo/PromoMotion';

export const Root = () => (
  <>
    <Composition
      id="LogoIntro"
      component={LogoIntro}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="PromoMotion"
      component={PromoMotion}
      durationInFrames={PROMO_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);
