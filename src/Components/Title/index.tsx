import * as React from 'react';
import cn from 'clsx';
import styles from './title.module.scss';

type As =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

type Color =
  | 'lightSolid'
  | 'yellow'

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: As,
  color?: Color,
  [key: string]: any;
}

export const Title: React.FunctionComponent<Props> = ({
  as: Component = 'h1',
  color,
  className,
  ...props
}) => {

  return (
    <Component
      className={cn(styles['title'], className, {
        [styles['-yellow']]: color === 'yellow',
        [styles['-lightSolid']]: color === 'lightSolid',
      })}
      {...props}
    >
      { props.children }
    </Component>
  );
}

Title.defaultProps = {
  as: 'h1',
  color: 'yellow'
}

export default Title;
