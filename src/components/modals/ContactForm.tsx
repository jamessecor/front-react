import * as React from "react";
import { useRef, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { IoMdCloseCircle } from "react-icons/io";
import { ButtonBase, CircularProgress } from "@mui/material";
import axios from "axios";

interface IContactFormProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalContentsStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '75%', sm: 400 },
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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [responseStatus, setResponseStatus] = useState<number | null>(null);

    const closeModal = () => {
        setIsSubmitted(false);
        setIsOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.target.id === "firstname") setFirstname(e.target.value);
        if (e.target.id === "lastname") setLastname(e.target.value);
        if (e.target.id === "email") setEmail(e.target.value);
        if (e.target.id === "message") setMessage(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        const emailResponse = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/front-email`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            message: message
        });
        setResponseStatus(emailResponse.status);
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
                                <IoMdCloseCircle />
                            </h1>
                        </ButtonBase>
                    </Grid>
                    {responseStatus ? (
                        <React.Fragment>
                            {responseStatus === 200
                                ? (
                                    <React.Fragment>
                                        <Typography variant={'body1'}>
                                            {'Thanks for joining the mailing list. We\'ll keep you up to date on all our happenings!'}
                                        </Typography>
                                        <Typography color={'blue'} variant={'body2'}>
                                            {'If you added a note, we\'ll respond in the next few days.'}
                                        </Typography>
                                    </React.Fragment>
                                )
                                : (
                                    <Grid>
                                        <Typography variant={'body1'}>
                                            {'We were unable to collect your info. Please refresh and try again. Thanks!'}
                                        </Typography>
                                        <Typography variant={'body1'}>
                                            <Button
                                                variant={'contained'}
                                                sx={{ width: '100%' }}
                                                onClick={() => {
                                                    setResponseStatus(null);
                                                    setIsSubmitted(false);
                                                }}
                                            >
                                                {'Retry'}
                                            </Button>
                                        </Typography>
                                    </Grid>
                                )}
                        </React.Fragment>
                    ) : (
                        <Grid container alignItems={'center'} justifyContent={'center'} item>
                            <form style={{ width: '100%' }} onSubmit={(e) => handleSubmit(e)}>
                                <Grid item sx={{ pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="firstname"
                                        label="First Name"
                                        value={firstname}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Grid>
                                <Grid item sx={{ pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="lastname"
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
                                        required
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
                                <Button
                                    variant={'contained'}
                                    sx={{ width: '100%' }}
                                    type={'submit'}
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? <CircularProgress /> : 'Submit'}
                                </Button>
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
