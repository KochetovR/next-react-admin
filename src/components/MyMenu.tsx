import { Menu } from 'react-admin';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import RedeemIcon from '@mui/icons-material/Redeem';

export const MyMenu = () => (
    <Menu>
        <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/posts" primaryText="Posts" leftIcon={<EmojiEventsIcon />}/>
        <Menu.Item to="/comments" primaryText="Comments" leftIcon={<RedeemIcon />}/>
    </Menu>
);