import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { AnimationContext } from '../../lib/hooks/useAnimationLibs/useAnimationLibs';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

export interface AnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const getAsyncAnimationModules = async () => Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
  const SpringRef = useRef<SpringType>();

  const GestureRef = useRef<GestureType>();

  const [isLoaded, setIsLoaded] = useState(false);

  const defaultProps = useMemo<AnimationContextPayload>(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  return <AnimationContext.Provider value={defaultProps}>{children}</AnimationContext.Provider>;
};
