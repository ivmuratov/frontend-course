import { FC } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const VStack: FC<VStackProps> = ({ align = 'start', ...otherProps }) => (
  <Flex direction='column' align={align} {...otherProps} />
);
