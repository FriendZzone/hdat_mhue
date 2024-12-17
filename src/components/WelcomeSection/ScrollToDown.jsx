import { bool, func } from 'prop-types';
import { styScrollWrapper } from './styles';

function ClickToSeeDetail({ loading, onClick }) {
  return (
    <div css={styScrollWrapper} onClick={onClick}>
      <section id="scroll" className="scroll__icon">
        <div className="button">
          <span></span>
        </div>
        <span className="text">{loading ? 'Một chút xíu...' : 'Bấm để xem chi tiết'}</span>
      </section>
    </div>
  );
}

ClickToSeeDetail.propTypes = {
  loading: bool.isRequired,
  onClick: func.isRequired,
};

export default ClickToSeeDetail;
