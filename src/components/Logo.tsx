import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <img
      src='https://res.cloudinary.com/exite/image/upload/f_auto/exitetogo/www.machne.co.il/gallery/sitepics/E4AE428F-4096-3977-5042-A7B948D38978.png'
      className='App-Logo-Img'
      alt='logo'
      onClick={() => navigate('/')}
    />
  );
}

export default Logo;
