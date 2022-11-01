import React from 'react';
import './TierList.scss';

export type GameTitleProps = {
    name: string;
    imgUrl: string;
}

const GameTitle: React.FC<GameTitleProps> = ({
    name,
    imgUrl,
}) => {
    return (
        <div className='title'>
            <img src={imgUrl} alt={name} />
        </div>
    )
}

export type TierListProps = {
    label: string;
    titles: GameTitleProps[];
}

const TierList: React.FC<TierListProps> = ({
    label,
    titles,
}) => {
    return (
        <div className='tier'>
            <div className='tier-label'>
                {label}
            </div>
            <div className='tier-titles'>
            {
                titles?.map(title => <GameTitle {...title} />)
            }
            </div>
        </div>
    )
}

export default TierList;