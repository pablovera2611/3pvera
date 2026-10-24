import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {ACCENT, BG, TEXT, fontFamily} from './theme';

export const Scene3Cta = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  // Ritmo calmado: entradas suaves, sin rebote.
  const logo = spring({frame, fps, config: {damping: 200}, durationInFrames: 40});
  const cta = spring({frame: frame - 25, fps, config: {damping: 200}, durationInFrames: 40});
  const pulse = 1 + 0.04 * Math.sin((frame / fps) * Math.PI * 2);
  const fadeOut = interpolate(frame, [durationInFrames - 30, durationInFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: BG, justifyContent: 'center', alignItems: 'center', gap: 120}}>
      <Img
        src={staticFile('logo.png')}
        style={{width: 700, opacity: logo, transform: `scale(${interpolate(logo, [0, 1], [0.9, 1])})`}}
      />
      <div
        style={{
          fontFamily,
          fontWeight: 600,
          fontSize: 72,
          color: TEXT,
          backgroundColor: ACCENT,
          padding: '36px 90px',
          borderRadius: 100,
          opacity: cta,
          transform: `translateY(${interpolate(cta, [0, 1], [40, 0])}px) scale(${pulse})`,
        }}
      >
        Conoce más
      </div>
      <AbsoluteFill style={{backgroundColor: BG, opacity: fadeOut}} />
    </AbsoluteFill>
  );
};
