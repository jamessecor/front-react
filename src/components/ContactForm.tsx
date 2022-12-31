import * as React from "react";
import { useRef, useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigateTo = useNavigate();

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
        <Container>
            <Grid sx={{ display: 'flex' }} direction={'column'} alignItems={'center'} justifyContent={'center'} container>
                <Grid xs={12} item>
                    <h5 className="pb-4 d-flex justify-content-center">join email list / leave a message</h5>
                </Grid>
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
                                label="Note (optional)"
                                value={message}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        {/* <Form.Label>First Name</Form.Label>
                            <Form.Control name='firstname' type="text" value={firstname} onChange={handleChange} /> */}
                        {/* </Form.Group>
                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name='lastname' type="text" value={lastname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required name='email' type="email" value={email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control rows={3} as="textarea" name='message' value={message} onChange={handleChange} />
                        </Form.Group> */}
                        <Button sx={{ width: '100%' }} type={'submit'} disabled={isSubmitted}>Submit</Button>
                    </form>
                    {/* {
                                isSubmitted
                                    ? (
                                        <Toast
                                            
                                            className={'position-absolute top-50 start-50 translate-middle'}
                                            onClose={() => navigateTo('/artworks?year=2022')}
                                            bg='success'
                                        >
                                            <Toast.Header>
                                                <strong className="me-auto">{'Success!'}</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                {'You\'re message has been sent directly to, and only to, James.'}
                                                <br/><br/>
                                                {'Thanks for reaching out!'}
                                            </Toast.Body>
                                        </Toast>                
                                    )
                                    : (
                                       // FORM GOES HERE
                                    )
                            } */}
                </Grid>
            </Grid>
        </Container >
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
