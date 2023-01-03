import * as React from "react";
import { useRef, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import { FaWindowClose } from "react-icons/fa";
import { ButtonBase } from "@mui/material";

interface IContactFormProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalContentsStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #ccc',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
};

const ContactForm: React.FC<IContactFormProps> = ({ isOpen, setIsOpen }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const closeModal = () => {
        setIsSubmitted(false);
        setIsOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log('change', e.target.value);
        if (e.target.id === "first-name") setFirstname(e.target.value);
        if (e.target.id === "last-name") setLastname(e.target.value);
        if (e.target.id === "email") setEmail(e.target.value);
        if (e.target.id === "message") setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log('submit', formRef.current);
        // emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '', process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '', formRef.current ?? '', process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? '')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    }

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby={'modal-modal-title'}
            aria-describedby={'modal-modal-description'}
        >
            <Box sx={modalContentsStyle}>
                <Grid sx={{ display: 'flex' }} direction={'column'} alignItems={'center'} justifyContent={'center'} container>
                    <Grid xs={12} item>
                        <Typography variant={'h6'} sx={{ pb: 2 }}>
                            {'Join Mailing List / Contact Us'}
                        </Typography>
                        <ButtonBase onClick={closeModal} sx={{ position: 'fixed', right: 0, top: 0 }}>
                            <h1 style={{ margin: 1 }}>
                                <FaWindowClose />
                            </h1>
                        </ButtonBase>
                    </Grid>
                    {isSubmitted ? (
                        <React.Fragment>
                            <Typography variant={'body1'}>
                                {'Thanks for joining the mailing list. We\'ll keep you up to date on all our happenings!'}
                            </Typography>
                            <Typography color={'blue'} variant={'body2'}>
                                {'If you added a note, we\'ll respond in the next few days.'}
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <Grid container alignItems={'center'} justifyContent={'center'} item>
                            <form style={{ width: '100%' }} ref={formRef} noValidate onSubmit={(e) => handleSubmit(e)}>
                                <Grid item sx={{ pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="first-name"
                                        label="First Name"
                                        value={firstname}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Grid>
                                <Grid item sx={{ pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="last-name"
                                        label="Last Name"
                                        value={lastname}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Grid>
                                <Grid item sx={{ pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        value={email}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Grid>
                                <Grid item sx={{ pb: 2 }}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        rows={3}
                                        id="message"
                                        label="Leave a message (optional)"
                                        value={message}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Grid>
                                <Button sx={{ width: '100%' }} type={'submit'} disabled={isSubmitted}>Submit</Button>
                            </form>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Modal >
    );
    /*
        return {
            isSubmitted // && errors.length === 0
            ? (
                <div>
                    <div className="mt-2 d-flex justify-content-center">
                        <h4>Success!</h4>
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                        <div>Thanks for your message.</div>
                    </div>
                </div>
            ) : ( Form goes here )
        }
        */

}

export default ContactForm;
