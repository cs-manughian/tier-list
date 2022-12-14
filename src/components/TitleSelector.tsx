import React from 'react';
import './TitleSelector.scss';
import { GameTitle, GameTitleAvatar } from './TierList';

// There are 64 Party Packs
// Hardcoded for the sake of the test but ideally would be stored elsewhere
const PARTY_PACK_IMAGES = ['https://jackboxgames.b-cdn.net/wp-content/uploads/2022/08/pp9temptile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2022/04/JBPS_635x291px.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2021/09/PP8_Nintendo_FirstLook-1Artboard-1.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/09/website-title-1.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/09/WebsiteTile-2.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/07/PP5_tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/07/PP4_tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/07/PP3_tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/07/PP2_tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/07/PP1_tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/07/T1_Tile_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/07/T2_Tile_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/07/Quad_Tile_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/07/Quint_Tile_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2016/11/feature_drawful2.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/feature_quiplash.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/feature_fibbage.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/feature_classic.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/02/Large-Blog-Header.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2022/09/quixortGameTile_v1.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2022/09/NS_WebTile_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2022/09/gameTile_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2022/09/JunkgameTitle.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2022/09/Fibbage4-tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2021/09/WebsiteTileImage_635x291.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2021/09/Website-Tile-Image.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2021/09/TPM-Website-Tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2021/10/tile-1x-1.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2021/09/DA_TileImage-1.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/09/BlatherTileImage.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/09/Talking-Points-Website-Tile-Image.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/09/Website-Tile-Image.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/09/Tile-Images.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2020/09/q3_websiteTile_v1.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/08/TJPP6_PushTheButton.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/08/TJPP6_Dictionarium.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/08/TJPP6_JokeBoat.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/08/TJPP6_RoleModels.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/08/TMP2_tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/05/ZD-5.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/05/MVC-4.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/05/3-PS.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/05/2-STR.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/05/1-YDKJ.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/CivicDoodle.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Bracketeering.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/MonsterSeekingMonster.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/SurviveTheInternet.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Fibbage3_EAU.png', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/PP3Tile_FakinIt.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/PP3Tile_TKO.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/PP3Tile_Guess.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/PP3Tile_TMP.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/PP3Tile_Quiplash2.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/QuiplashXLtile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Earwaxtile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/BombCorptile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Bidiotstile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Fibbage2tile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/LieSwattertile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/WordSpudtile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Drawfultile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/FibbageXLtile.jpg', 'https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/YDKJ2015tile.jpg']

type TitleSelectorProps = {
    setActiveTitle: (value: GameTitle) => void;
    activeTitle: GameTitle;
}

const TitleSelector: React.FC<TitleSelectorProps> = ({
    setActiveTitle,
    activeTitle,
}) => {
    return (
        <div className='title-selector'>
            {
                PARTY_PACK_IMAGES.map((imgUrl, i) => 
                    <GameTitleAvatar 
                        key={`Game-${i}`} 
                        name={`Game-${i}`} 
                        imgUrl={imgUrl}
                        isActive={imgUrl === activeTitle.imgUrl}
                        // Use imgUrl for title for now, since it's a unique value that we have from the URL
                        onClick={() => setActiveTitle({
                            name: imgUrl,
                            imgUrl,
                        })} 
                    />
                )
            }
        </div>
    )
}

export default TitleSelector;