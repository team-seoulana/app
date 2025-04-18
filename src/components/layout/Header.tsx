import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0F1115] text-white py-4 px-6 z-[100] shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold ml-3">ForestPad</h1>
        </div>

        <nav className="flex space-x-4">
          <button
            onClick={() => navigate('/explore')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${isActive('/explore') ? 'bg-[#1E2128] text-white' : 'text-gray-400 hover:text-white hover:bg-[#1E2128]/50'}`}
          >
            <img
              src={isActive('/explore') ? '/images/explore-active.png' : '/images/explore.png'}
              alt="Explore"
              className="w-5 h-5 mr-2"
            />
            Explore
          </button>
          <button
            onClick={() => navigate('/launch')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${isActive('/launch') ? 'bg-[#1E2128] text-white' : 'text-gray-400 hover:text-white hover:bg-[#1E2128]/50'}`}
          >
            <img
              src={isActive('/launch') ? '/images/launch-active.png' : '/images/launch.png'}
              alt="Launch"
              className="w-5 h-5 mr-2"
            />
            Launch
          </button>
        </nav>

        <WalletMultiButton />
      </div>
    </header>
  );
};
