import ButtonBase from '@mui/material/ButtonBase';
import { BsInstagram } from 'react-icons/bs';

const FRONT_INSTA = 'https://www.instagram.com/gallerythefront';

const Insta = () => (
    <ButtonBase onClick={() => window.open(FRONT_INSTA)} >
        <BsInstagram />
    </ButtonBase>
);

export default Insta;