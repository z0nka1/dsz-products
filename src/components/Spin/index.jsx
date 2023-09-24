import './index.css';

const Spin = ({ spinning, children }) => {
  return (
    <div className={`spin-container ${spinning ? 'is-active' : ''}`}>
      {spinning && (
        <div className='spin-dot-container'>
          <div className='spin-dot'>
            <span className='spin-dot-item'></span>
            <span className='spin-dot-item'></span>
            <span className='spin-dot-item'></span>
            <span className='spin-dot-item'></span>
          </div>
        </div>
      )}
      <div className='spin-blur'>{ children }</div>
    </div>
  )
}

export default Spin;
