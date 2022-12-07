import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface IStepperProps {
  images: Array<string>;
}

const Stepper: React.FC<IStepperProps> = ({ images }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{m: 3}}>
        <img width={'100%'} src={images[activeStep] ?? ''} />
        <MobileStepper
          variant="dots"
          steps={images.length}
          position="bottom"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
              Next
              {theme.direction === 'rtl' ? (
                <MdArrowBackIos />
              ) : (
                <MdArrowForwardIos />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <MdArrowForwardIos />
              ) : (
                <MdArrowBackIos />
              )}
              Back
            </Button>
          }
        />
    </Box>
  );
}

export default Stepper;