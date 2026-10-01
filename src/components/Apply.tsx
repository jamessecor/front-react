import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { BsBrushFill, BsCameraVideoFill, BsCash, BsImages, BsPersonFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineOpenInNew } from 'react-icons/md';

export const NavItemApply = 'Apply';
export const MEMBER_APPLICATION_URL = 'https://form.jotform.com/262623264314048';

const Apply = () => {
    return (
        <Container>
            <img src={`${import.meta.env.VITE_URL}/images/apply/sunnywindow.jpg`} style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: 0.15,
                objectFit: 'cover',
                objectPosition: '70% 80%'
            }}
            />
            <Stack justifyContent={'center'} sx={{ marginX: { xs: 1, sm: 2, md: 28 } }}>
                <Typography align={'center'} variant={'h3'} sx={{ pb: 1 }}>
                    {'Join Us!'}
                </Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'}>
                    <Box textAlign={'center'}>
                        <Typography variant={'h6'}>
                            {'Thanks for considering membership at The Front!'}
                        </Typography>
                        <Typography variant={'body1'} sx={{ pb: 1 }}>
                            <div dangerouslySetInnerHTML={{ __html: 'See below for guidelines, a link to the application form, and helpful information. Contact <a target="_blank" href="mailto:apply@thefrontvt.com">apply@thefrontvt.com</a> with questions.' }} />
                        </Typography>
                        <Typography variant={'body1'} sx={{ pb: 4 }}>
                            {'The deadline to apply is November 30th. You’ll hear from us with a decision by January 4th.'}
                        </Typography>
                        <Button variant={'contained'} size={'large'} onClick={() => window.open(MEMBER_APPLICATION_URL, '_blank')}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                gap={1}
                            >
                                <MdOutlineOpenInNew />{'Apply Now'}
                            </Stack>
                        </Button>
                    </Box>
                </Stack>
                <Divider sx={{ paddingTop: 3 }} />
                <Stack direction={'column'} sx={{ paddingTop: 2 }}>
                    <Typography align={'left'} variant={'h6'}>
                        {'What to include'}
                    </Typography>
                    <Typography align={'left'} variant={'body2'} sx={{ pb: 1 }}>
                        {'The form will prompt you for the following responses. Consider collecting this information before you start the application.'}
                    </Typography>
                    <List>
                        <ListItem disableGutters>
                            <ListItemIcon><BsPersonFill /></ListItemIcon>
                            <ListItemText>{'Contact info: name, email, phone, town/city, and online presence if relevant'}</ListItemText>
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><BsBrushFill /></ListItemIcon>
                            <ListItemText>{'A brief statement about your art practice, plus a short bio'}</ListItemText>
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><IoIosPeople /></ListItemIcon>
                            <ListItemText>{'What excites and concerns you about membership, and whether you can fulfill the membership expectations (shifts, shows, meetings, committees, dues)'}</ListItemText>
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><BsImages /></ListItemIcon>
                            <ListItemText>{'Up to 6 images of your work — 2MB max each, PNG (.png), JPEG (.jpg) or GIF(.gif) formats'}</ListItemText>
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><BsCameraVideoFill /></ListItemIcon>
                            <ListItemText>{'Up to 1 video submission (time-based artwork only; please don’t submit videos of your non-video art practice). Videos can be up to 50MB in mp4, avi, or mov formats.'}</ListItemText>
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><BsCash /></ListItemIcon>
                            <ListItemText>{'You do not need to share anything about your finances — no one is turned away for inability to pay dues'}</ListItemText>
                        </ListItem>
                    </List>
                </Stack>

                <Typography align={'center'} variant={'h4'} sx={{ paddingTop: 3 }}>
                    {'After applying...'}
                </Typography>

                <Divider sx={{ paddingTop: 1 }} />
                <Stack direction={'row'}>
                    <Stack direction={'column'}>
                        <Typography align={'left'} variant={'h6'}>
                            {'Follow-up'}
                        </Typography>
                        <Stack spacing={1}>
                            <Typography align={'left'} variant={'body1'}>
                                {'We\'ll send a confirmation of receipt when you submit the form.'}
                            </Typography>
                            <Typography align={'left'} variant={'body1'}>
                                {'Once all applications are in, current members will meet in person to select invitees. A minimum of ¾ of current members must vote in favor for an applicant to be admitted. Since we have a broad variety of preference, this means it\'s difficult - and unpredictable - for any given applicant to be accepted. You can expect a final response by January 4th; successful applicants will be encouraged to submit work for our Group Show opening February 5th. Thanks very much for your interest and the time spent applying; we really appreciate the work and feeling that goes in.'}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Divider sx={{ paddingTop: 3 }} />
                <Stack direction={'row'}>
                    <Stack direction={'column'}>
                        <Typography align={'left'} variant={'h6'}>
                            {'More about the gallery'}
                        </Typography>
                        <Stack spacing={1}>
                            <Typography align={'left'} variant={'body2'}>
                                {'The following may help answer some likely questions. If you want to know more, please write to apply@thefrontvt.com or call (802) 552-0877.'}
                            </Typography>
                            <Typography align={'left'} variant={'body2'}>
                                {'Previous applicants are encouraged to re-apply: the jury pool is always changing.'}
                            </Typography>
                            <Typography align={'left'} variant={'body2'}>
                                {'The Front Gallery started in its present form in May 2015 as an artist-run co-op gallery. Before then the space was shared by [current member] Glen Coburn Hutcheson\'s studio and a visual art space called Gallery 6, both of which gave way to The Front. At first, there were only group shows, first every six weeks, then every month. Then in the spring of 2020 we started alternating one-person shows with group shows.'}
                            </Typography>
                            <Typography align={'left'} variant={'body2'}>
                                {'The space features two large street-facing windows and plenty of walk-in traffic, and is always lively during Montpelier Art Walks. Since the pandemic, we\'ve put up a new show every month, featuring all members\' work in six group exhibitions alternating with six solo shows each year. With membership ranging to 24 members, we schedule solo shows up to 4 years out. Members also use the gallery as desired for events including artist talks, performances, movie nights, and critiques. New members meet soon after admission to schedule their one-person shows, which may be booked 1-4 years out.'}
                            </Typography>
                            <Typography align={'left'} variant={'body2'}>
                                {'The gallery is well integrated into the area arts world and solo shows are well received.'}
                            </Typography>
                            <Typography align={'left'} variant={'body2'}>
                                {'The Front is an artist-run cooperative, structured as an L3C. That means members contribute the time, energy, and most of the funds to run everything. Being a member of the gallery means you are a part-owner of the Front. Nominal dues are $50/month, and the gallery takes a 15% commission on sales. The Front is committed to equity and inclusivity, and because of that we encourage all to apply for membership regardless of ability to pay. We gratefully accept additional donations from those with means to help us meet expenses.'}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container >
    );
}

export default Apply;
