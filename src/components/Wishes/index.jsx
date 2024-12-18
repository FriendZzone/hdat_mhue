import { useState } from 'react';
import QRChuRe from '../../assets/images/QR_chu_re.jpg';
import QRCoDau from '../../assets/images/QR_co_dau.jpg';
import Image from '../../assets/images/gallery-3.jpg';

function Wishes(props) {
  const [showTicket, setShowTicket] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = async () => {
    const currentQR = showTicket === 'co_dau' ? '5022032024' : '217827288';

    try {
      // Copy text to clipboard
      await navigator.clipboard.writeText(currentQR);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const handleShowTicket = (target) => {
    setIsCopied(false);
    setShowTicket(showTicket === target ? false : target);
  };

  return (
    <div style={{ clear: 'both' }}>
      <div className="fh5co-heading" style={{ padding: '50px 0 16px' }}>
        <h2 className="main-font text-center">Mừng cưới</h2>
        <p className="main-font text-center">
          Gửi tặng những phần quà ý nghĩa cho cô dâu và chú rể <br /> Chân thành cảm ơn bạn!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <button className="btn btn-primary" onClick={() => handleShowTicket('co_dau')}>
              Mừng cưới cô dâu
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => handleShowTicket('chu_re')}>
              Mừng cưới chú rể
            </button>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            height: showTicket ? '600px' : '0',
            overflow: 'hidden',
            transition: 'all 0.5s ease-in',
          }}
        >
          <img src={showTicket === 'co_dau' ? QRCoDau : QRChuRe} alt="qr" style={{ width: '80%' }} loading="lazy" />
          <button className="btn btn-primary" onClick={handleCopyText}>
            {isCopied ? 'Đã copy Số tài khoản' : 'Copy Số tài khoản'}
          </button>
        </div>
      </div>
      <img src={Image} alt="thanks" style={{ width: '100%' }} />
    </div>
  );
}

export default Wishes;
