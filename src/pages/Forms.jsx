import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import { LocationInfox } from "../components/Forms/LocationInfox";
import { PersonalInfox } from "../components/Forms/PesonalInfox";
import { StepperComponent } from "../components/Steper";
import { useFormData } from "../context";
import styles from "../styles/styles.module.scss";

const steps = ['Paciente', 'Localização', 'Painel'];

const Forms = () => {
  const [formStep, setFormStep] = useState(0);
  const { data } = useFormData();
  const navigate = useNavigate();

  const nextFormStep = () => {
    if (formStep === 1) {
      return navigate("/painel", { state: data });
    }

    setFormStep((currentStep) => currentStep + 1);
  };

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <Container
      disableGutters
      maxWidth="xl"
      component="main"
      className={styles.mainContent}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container disableGutters maxWidth="md" component="div" sx={{
        padding: '2rem',
        background: '#fff',
        width: '40vw',
        borderRadius: '10px',
      }}>

        <StepperComponent currentStep={formStep} steps={steps} />

        {formStep === 0 && (
          <PersonalInfox formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep === 1 && (
          <LocationInfox formStep={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep} />
        )}

      </Container>
    </Container>
  );
};

export default Forms;
