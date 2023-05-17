import { FC } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = ({ align = 'start', ...otherProps }) => (
  <Flex direction='column' align={align} {...otherProps} />
);
