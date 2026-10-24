import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Scene1Logo} from './Scene1Logo';
import {Scene2Text} from './Scene2Text';
import {Scene3Cta} from './Scene3Cta';

export const TRANSITION = 15;
// Las transiciones se solapan, así que cada escena suma TRANSITION extra:
// 105 + 165 + 120 - 2 * 15 = 360 frames (12 s a 30 fps).
export const SCENE_FRAMES = [105, 165, 120] as const;
export const PROMO_DURATION = SCENE_FRAMES.reduce((a, b) => a + b, 0) - 2 * TRANSITION;

export const PromoMotion = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES[0]}>
      <Scene1Logo />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={slide({direction: 'from-bottom'})}
      timing={linearTiming({durationInFrames: TRANSITION})}
    />
    <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES[1]}>
      <Scene2Text />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition
      presentation={fade()}
      timing={linearTiming({durationInFrames: TRANSITION})}
    />
    <TransitionSeries.Sequence durationInFrames={SCENE_FRAMES[2]}>
      <Scene3Cta />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);
