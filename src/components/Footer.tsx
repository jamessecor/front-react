import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { BsEnvelopeOpen, BsInstagram } from 'react-icons/bs';
import ContactForm from "./modals/ContactForm";

const footerStyle = {
    p: 2,
    display: 'flex',
    flexDirection: 'row',
    background: 'lightgray'
};

const Footer = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <Box
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={footerStyle}
        >
            <Box justifyContent={'left'}>
                <Button
                    onClick={() => window.open('https://www.instagram.com/gallerythefront')}
                >
                    <BsInstagram />
                    <Box sx={{ pl: 1 }}>{'Instagram'}</Box>
                </Button>
                <Button onClick={() => setIsContactFormOpen(!isContactFormOpen)}>
                    <BsEnvelopeOpen />
                    <Box sx={{ pl: 1 }}>{'Join Mailing List'}</Box>
                </Button>
            </Box>
            <Box justifyContent={'right'}>
                <div dangerouslySetInnerHTML={{ __html: '&copy; the Front 2023' }}></div>
            </Box>
            <ContactForm
                isOpen={isContactFormOpen}
                setIsOpen={setIsContactFormOpen}
            />
        </Box>
    );
}

export default Footer;