import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';


export const StepperComponent = ({ currentStep, steps }) => {
  return (
    <Stepper activeStep={currentStep} sx={{ pt: 3, pb: 5 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}