import { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ContactForm from './modals/ContactForm';
import { PAYPAL_DONATE_LINK } from '../models/Paypal';
import { BiDonateHeart } from 'react-icons/bi';
import Hours from './Hours';
import { BsBrushFill, BsBuilding, BsCash, BsEnvelopeFill, BsHouseFill, BsInstagram, BsPeopleFill, BsPersonBadgeFill, BsPersonFill, BsPhoneFill, BsTelephoneFill } from 'react-icons/bs';
import { FaPeopleCarry } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

export const NavItemApply = 'Apply';

const Apply = () => (
    <Container>
        <Stack justifyContent={'center'} sx={{ marginX: { xs: 1, sm: 2, md: 28 } }}>
            <Typography align={'center'} variant={'h3'} sx={{ pb: 1 }}>
                {'Join Us!'}
            </Typography>
            <Typography align={'center'} variant={'h6'}>
                {'Thanks for considering membership at The Front!'}
            </Typography>
            <Typography align={'center'} variant={'h6'} sx={{ pb: 4 }}>
                {'To apply, please send an email to'}
                <Button variant={'text'} onClick={() => window.open('mailto:apply@thefrontvt.com')}>
                    {'apply@thefrontvt.com'}
                </Button>
                {'with the following information:'}
            </Typography>

            <Divider />
            <Stack direction={'column'}>
                <Typography align={'left'} variant={'h6'}>
                    {'Contact'}
                </Typography>
                <List>
                    <ListItem disableGutters>
                        <ListItemIcon><BsPersonFill /></ListItemIcon>
                        <ListItemText>{'Name (first and last)'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><BsEnvelopeFill /></ListItemIcon>
                        <ListItemText>{'Email address'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><BsTelephoneFill /></ListItemIcon>
                        <ListItemText>{'Phone number'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><BsHouseFill /></ListItemIcon>
                        <ListItemText>{'Town or city of residence'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><BsInstagram /></ListItemIcon>
                        <ListItemText>{'Online presence if relevant (instagram, website, etc)'}</ListItemText>
                    </ListItem>
                </List>
            </Stack>

            <Divider />
            <Stack direction={'row'}>
                <Stack direction={'column'}>
                    <Typography align={'left'} variant={'h6'}>
                        {'Statement'}
                    </Typography>
                    <Typography align={'left'} variant={'body1'}>
                        {'Tell us briefly about your art practice. If you don\'t have a statement ready to go, feel free to use these prompts: What do you make? Why?'}
                    </Typography>
                </Stack>
            </Stack>

            <Divider sx={{ paddingTop: 3 }} />
            <Stack direction={'row'}>
                <Stack direction={'column'}>
                    <Typography align={'left'} variant={'h6'}>
                        {'Bio'}
                    </Typography>
                    <Typography align={'left'} variant={'body1'}>
                        {'Tell us a little about yourself. If you don\'t have a bio ready to go, feel free to use these prompts: Who are you? Who are your people?'}
                    </Typography>
                </Stack>
            </Stack>

            <Divider sx={{ paddingTop: 3 }} />
            <Stack direction={'column'}>
                <Typography align={'left'} variant={'h6'}>
                    {'Membership in the Cooperative'}
                </Typography>
                <Typography align={'left'} variant={'body1'}>
                    {'The Front relies on members\' energy and collaboration to keep going. Specifically, member-owners are expected to:'}
                </Typography>
                <List>
                    <ListItem disableGutters>
                        <ListItemIcon><BsBuilding /></ListItemIcon>
                        <ListItemText>{'Spend at least one 3-hour shift staffing the gallery every month'}</ListItemText>

                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><BsBrushFill /></ListItemIcon>
                        <ListItemText>{'Submit work for group shows every 2 months'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><IoIosPeople /></ListItemIcon>
                        <ListItemText>{'Attend all-member meetings once every 2 months (usually ~2 hours)'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><FaPeopleCarry /></ListItemIcon>
                        <ListItemText>{'Work on gallery committees (eg Events, Finance, Installation) with fellow members'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemIcon><BsCash /></ListItemIcon>
                        <ListItemText>{'Contribute dues (nominally $50/month) as feasible'}</ListItemText>
                    </ListItem>
                </List>
                <Typography align={'left'} variant={'body1'}>
                    {'Tell us what excites you most about gallery membership, and what concerns you most. Do you think you can fulfill the expectations above?'}
                </Typography>
                <Typography align={'left'} variant={'body2'}>
                    {'(Note that we will not turn away applicants for lack of ability to pay dues; you DO NOT need to tell us about your finances.)'}
                </Typography>
            </Stack>

            <Divider sx={{ paddingTop: 3 }} />
            <Stack direction={'row'}>
                <Stack direction={'column'}>
                    <Typography align={'left'} variant={'h6'}>
                        {'Images'}
                    </Typography>
                    <Typography align={'left'} variant={'body1'}>
                        {'Attach 6 images of work. Preferred format: JPEG, max size 1MB per image. But send what you have and we\'ll follow up as needed.'}
                    </Typography>
                </Stack>
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
                    <Typography align={'left'} variant={'body1'}>
                        {'We\'ll send a confirmation of receipt within a day of your email submission. Once all applications are in, current members will meet in person to select invitees. A minimum of ¾ of current members must vote in favor for an applicant to be admitted. Since we have a broad variety of preference, this means it\'s difficult - and unpredictable - for any given applicant to be accepted. You can expect a final response by July 8th; successful applicants will be encouraged to submit work for our Group Show opening August 4th. Thanks very much for your interest and the time spent applying; we really appreciate the work and feeling that goes in.'}
                    </Typography>
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
                            {'None of the following is necessary for applicants, but may help answer some likely questions. If you want to know more or need help, please do write to apply@thefrontvt.com or call (802) 552-0877; we\'ll do our best to respond quickly.'}
                        </Typography>
                        <Typography align={'left'} variant={'body2'}>
                            {'Previous applicants are warmly encouraged to re-apply: the jury pool is always changing.'}
                        </Typography>
                        <Typography align={'left'} variant={'body2'}>
                            {'The Front Gallery started in its present form in May 2015 as an artist-run co-op gallery. Before then the space was shared by [current member] Glen Coburn Hutcheson\'s studio and a visual art space called Gallery 6, both of which gave way to The Front. At first, there were only group shows, first every six weeks, then every month. Then in the spring of 2020 we started alternating one-person shows with group shows.'}
                        </Typography>
                        <Typography align={'left'} variant={'body2'}>
                            {'The space features two large street-facing windows and plenty of walk-in traffic, and is always lively during Montpelier Art Walks. Since the early days of the pandemic, we\'ve put up a new show every month, featuring all members\' work in six group exhibitions alternating with six solo shows each year. With membership ranging between 12 and 24 members, we schedule solo shows up to 3 years out. Members also use the gallery as desired for events including artist talks, performances, movie nights, and critiques.'}
                        </Typography>
                        <Typography align={'left'} variant={'body2'}>
                            {'The Front is an artist-run cooperative, structured as an L3C. That means members contribute the time, energy, and most of the funds to run everything. Being a member of the gallery means you are a part-owner of the Front. Nominal dues are $50/month, and the gallery takes a 15% commission on sales. The Front is committed to equity and inclusivity, and because of that we encourage all to apply for membership regardless of ability to pay. We gratefully accept additional donations from those with means to help us meet expenses.'}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Divider sx={{ paddingTop: 3 }} />
            <Stack>
                <Typography align={'left'} variant={'h6'}>
                    {'Our show schedule for 2023:'}
                </Typography>
                <List>
                    <ListItem disableGutters>
                        <ListItemText>{'Spend at least one 3-hour shift staffing the gallery every month'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Group Show #55 opening June 2, 4-8pm'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Diane Sophrin opening July 7, 4-7pm'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Group Show #56 opening August 4, 4-8pm'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Marjorie Kramer opening September 1, 4-7pm'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Group Show #57 opening October 6, 4-8pm'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Delia Robinson opening November  3, 4-7pm'}</ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText>{'Group Show #58 opening Dec 1, 4-8pm'}</ListItemText>
                    </ListItem>
                </List>
            </Stack>
        </Stack>
    </Container >
);

export default Apply;
