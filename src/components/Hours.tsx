import * as React from 'react';
import Typography from '@mui/material/Typography';

interface IHoursProps {
    alignment?: 'center' | 'right' | 'left' | 'inherit' | 'justify'
}
const Hours: React.FC<IHoursProps> = ({ alignment = 'left' }) => (
    <React.Fragment>
        <Typography align={alignment} variant={'h5'} sx={{ pb: 1 }}>
            {'Regular Hours:'}
        </Typography>
        <Typography variant={'body1'} align={alignment} >
            <strong>{'Fridays: '}</strong>
            {'4-7pm'}
        </Typography>
        <Typography variant={'body1'} align={alignment}>
            <strong>{'Saturdays and Sundays: '}</strong>
            {'11am - 5pm'}
        </Typography>
    </React.Fragment>
);

export default Hours;