import { IRate } from '../../interfaces/rate';
import { CurrentInfo } from '../CurrentInfo/CurrentInfo';
import './header.css';

type Props = {
  allRate: IRate[];
}

export const Header: React.FC<Props> = ({ allRate }) => {
  return (
    <div className="header">
      <div className='header-title'>Currency converter</div>
      <CurrentInfo allRate={allRate}/>
    </div >
  );
}