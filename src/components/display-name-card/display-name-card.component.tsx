import { Avatar, DisplayNameCardContainer } from './display-name-card.styles';

type DisplayNameCardProps = {
    displayName: string;
    avatar: string;
};
const DisplayNameCard = ({ displayName, avatar }: DisplayNameCardProps) => {
    return (
        <DisplayNameCardContainer>
            <Avatar src={avatar} alt={displayName} />
            <p>{displayName}</p>
        </DisplayNameCardContainer>
    );
};

export default DisplayNameCard;