import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string,
  classNames: string,
  innerValue: string | ReactNode,
}

export const PageLink: React.FC<Props> = ({ to, classNames, innerValue }) => (
  <NavLink
    to={to}
    className={classNames}
  >
    {innerValue}
  </NavLink>
)