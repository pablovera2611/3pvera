import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ACCENT, BG} from './theme';

export const Scene1Logo = () => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();

  // Ritmo rápido: el círculo y el logo arrancan de inmediato.
  const circle = spring({frame, fps, config: {damping: 14, stiffness: 120}});
  const logo = spring({frame: frame - 6, fps, config: {damping: 11, stiffness: 140, mass: 0.8}});
  const logoX = interpolate(logo, [0, 1], [-width, 0]);

  return (
    <AbsoluteFill style={{backgroundColor: BG, justifyContent: 'center', alignItems: 'center'}}>
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          backgroundColor: ACCENT,
          transform: `scale(${circle})`,
        }}
      />
      <Img
        src={staticFile('logo.png')}
        style={{width: 700, transform: `translateX(${logoX}px)`}}
      />
    </AbsoluteFill>
  );
};
