import classnames from 'classnames';

import './layout.scss';

export type TLayoutProps = JSX.IntrinsicElements['div'];

export const Layout = ( { className, ...rest }: TLayoutProps ) => {
  return <div className={classnames( 'layout', className )} {...rest} />;
};
