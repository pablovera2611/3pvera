import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {ACCENT, BG, TEXT, fontFamily} from './theme';

const PHRASES = ['Seguridad', 'Prevención', 'Compromiso'];
const STAGGER = 40; // frames entre frases

const Phrase = ({text, delay}: {text: string; delay: number}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const progress = spring({frame: frame - delay, fps, config: {damping: 200}, durationInFrames: 24});
  const y = interpolate(progress, [0, 1], [140, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  // La máscara recorta el texto mientras sube desde abajo.
  return (
    <div style={{overflow: 'hidden', padding: '8px 0'}}>
      <div
        style={{
          fontFamily,
          fontWeight: 700,
          fontSize: 130,
          color: TEXT,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const Scene2Text = () => (
  <AbsoluteFill style={{backgroundColor: BG, justifyContent: 'center', padding: 100}}>
    <div style={{width: 120, height: 12, backgroundColor: ACCENT, marginBottom: 40}} />
    {PHRASES.map((text, i) => (
      <Phrase key={text} text={text} delay={10 + i * STAGGER} />
    ))}
  </AbsoluteFill>
);
