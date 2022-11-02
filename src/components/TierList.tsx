import React from 'react';
import './TierList.scss';

export type GameTitle = {
    name: string;
    imgUrl: string;
}

export type GameTitleProps = GameTitle & {
    isActive?: boolean;
    onClick?: () => void;
}

export const GameTitleAvatar: React.FC<GameTitleProps> = ({
    name,
    imgUrl,
    isActive,
    onClick,
}) => {
    return (
        <div className='title' onClick={onClick}>
            <img className={isActive ? 'active' : ''} src={imgUrl} alt={name} />
        </div>
    )
}

export type TierListProps = {
    label: string;
    titles: GameTitle[];
    onClick: (tierLabel: string) => void;
}

const TierList: React.FC<TierListProps> = ({
    label,
    titles,
    onClick,
}) => {
    return (
        <div className='tier'>
            <div className='tier-label'>
                {label}
            </div>
            <div className='tier-titles' onClick={() => onClick(label)}>
                {
                    titles?.map(title => 
                        <GameTitleAvatar 
                            key={title.name}
                            {...title} 
                        />
                    )
                }
            </div>
        </div>
    )
}

export default TierList;