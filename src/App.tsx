
import { useState } from 'react';
import './App.scss';
import TierList, { GameTitle } from './components/TierList';
import TitleSelector from './components/TitleSelector';

function App() {

  const tiers = [
    'Love it',
    'Like it',
    'Leave it',
    'Haven\'t played',
  ];
  
  const [activeTitle, setActiveTitle] = useState<GameTitle>({ name: '', imgUrl: '' });

  const [tierTitles, setTierTitles] = useState<Record<string, GameTitle[]>>({
    'Love it': [{
      name: 'Test',
      imgUrl: 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/YDKJ2015tile.jpg'
    }]
  });

  function addTitleToTier (tierLabel: string) {
    // User selected a title and clicked on the tier list
    if (activeTitle) {

      // TODO: Disallow adding a game title to different tiers
      const alreadyAdded = tierTitles[tierLabel]?.find(title => title.name === activeTitle.name);
      if (alreadyAdded) return;

      // Add game title to tier list
      const gameTitlesInTier = tierTitles[tierLabel]?.map(title => { return { ...title } }) ?? [];
      gameTitlesInTier.push({
        ...activeTitle
      });
  
      setTierTitles({
        ...tierTitles,
        [tierLabel]: gameTitlesInTier,
      })

    }
  }

  // TODO: Remove a title from the tier when it is selected
  // function removeTitleFromTier () {}
  
  return (
    <div className="app">
      <div className='banner'>
        <h1>Tier List</h1>
      </div>
      <div style={{ display: 'inline-flex' }}>

        {/* Naturally I would style the application so more columns are allowed per tier to view more game titles per tier */}
        <div className='tiers'>
        {
          tiers.map(tier => <TierList 
            key={tier}
            label={tier} 
            titles={tierTitles[tier]} 
            onClick={addTitleToTier}
          />)
        }
        </div>
        <TitleSelector 
          setActiveTitle={setActiveTitle}
          activeTitle={activeTitle}
        />
      </div>
    </div>
  );
}

export default App;

