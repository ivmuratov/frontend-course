import { createContext, useContext } from 'react';
import { AnimationContextPayload } from '../../../ui/AnimationProvider/AnimationProvider';

export const AnimationContext = createContext<AnimationContextPayload>({});
export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;
