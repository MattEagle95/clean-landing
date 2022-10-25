import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export type StatusAlertProps = AlertProps & {
  title?: string;
  description?: string;
};

export const StatusAlert = (props: PropsWithChildren<StatusAlertProps>) => {
  const { title, description, ...alertProps } = props;

  return (
    <Alert
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      textAlign={'center'}
      {...alertProps}
    >
      <AlertIcon boxSize={'32px'} mr={0} />
      <AlertTitle mr={0}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
