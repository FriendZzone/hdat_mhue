import useDateCountdown from 'src//hooks/useDateCountdown';
import ButtonLive from '../WeddingSection/ButtonLive';
import CountItem from './CountItem';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px' }}>
            {`ACARA ${finalText} BERLANGSUNG!`}
          </div>
        </div>
        <ButtonLive />
      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Ngày" number={days} />
      <CountItem text="Giờ" number={hours} />
      <CountItem text="Phút" number={minutes} />
      <CountItem text="Giây" number={seconds} />
    </div>
  );
}

export default CountContainer;
