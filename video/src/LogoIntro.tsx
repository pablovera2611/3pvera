import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const LogoIntro = () => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();

  const slide = spring({frame, fps, config: {damping: 200}});
  const logoX = interpolate(slide, [0, 1], [-width, 0]);
  const textOpacity = interpolate(frame, [45, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
      <Img src={staticFile('logo.png')} style={{height: 360, transform: `translateX(${logoX}px)`}} />
      <h1 style={{fontFamily: 'sans-serif', fontSize: 96, opacity: textOpacity}}>Tu texto aquí</h1>
    </AbsoluteFill>
  );
};
