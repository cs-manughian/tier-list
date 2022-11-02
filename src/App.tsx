
import { useState } from 'react';
import './App.scss';
import TierList, { GameTitleProps } from './components/TierList';
import TitleSelector from './components/TitleSelector';

function App() {

  const tiers = [
    'Love it',
    'Like it',
    'Leave it',
    'Haven\'t played it',
  ]

  const [tierTitles, setTierTitles] = useState<Record<string, GameTitleProps[]>>({
    'Love it': [{
      name: 'Test',
      imgUrl: 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/YDKJ2015tile.jpg'
    }]
  });
  
  return (
    <div className="app">
      <div className='banner'>
        <h1>Tier List</h1>
      </div>
      {
        tiers.map(tier => <TierList 
          key={tier}
          label={tier} 
          titles={tierTitles[tier]} 
        />)
      }
      <TitleSelector />
    </div>
  );
}

export default App;

