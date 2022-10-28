import clsx from 'clsx';
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import { usePopper } from 'react-popper';
import { twMerge } from 'tailwind-merge';

export const tooltipClasses: any = {
  default:
    'hidden md:block py-2 px-3 rounded-md bg-dark-800 text-neutral-200 dark:bg-light-200 dark:text-neutral-800 text-sm z-10',
};

export type TooltipProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  popperProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export default function Tooltip(props: PropsWithChildren<TooltipProps>) {
  const { title, children, popperProps, ...rest } = props;
  const [show, setShow] = useState(false);
  const [refElement, setRefElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(refElement, popperElement);

  const open = () => setShow(true);
  const close = () => setShow(false);

  const classes = useMemo(() => {
    return twMerge(clsx(tooltipClasses.default, popperProps?.className));
  }, [popperProps?.className]);

  return (
    <div>
      <div
        ref={setRefElement}
        onMouseEnter={open}
        onMouseLeave={close}
        {...rest}
      >
        {children}
      </div>

      {show && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          className={classes}
          {...attributes.popper}
          {...popperProps}
        >
          {title}
        </div>
      )}
    </div>
  );
}
