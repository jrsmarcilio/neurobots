import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from "../../styles/styles.module.scss";

import { useFormData } from "../../context";

export const PersonalInfox = ({ formStep, nextFormStep }) => {
  const { data, setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  const [whatInvestmentValue, setWhatInvestmentValue] = useState(data.investmentValue / 1000);
  const handleChangeWhatInvestment = (event) => {
    setWhatInvestmentValue(event.target.value);
    setValue('investmentValue', event.target.value * 1000);
  };

  const [hasAVCInTheFamily, setHasAVCInTheFamily] = useState(data.hasAvc);
  const handleChangeHasAVC = (event) => {
    setHasAVCInTheFamily(event.target.value);
    setValue('hasAvc', event.target.value);
  };

  return (
    <Container className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <form component='form' onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Informações do paciente
        </Typography>

        <Grid container spacing={3} sx={{ marginBottom: '2rem' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Nome"
              fullWidth
              autoComplete="name"
              variant="outlined"
              {...register("name", { required: true })}
              defaultValue={data.name}
            />
            {errors.name && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="whatsapp"
              name="whatsapp"
              label="WhatsApp"
              fullWidth
              autoComplete="whatsapp"
              variant="outlined"
              {...register("whatsapp", { required: true })}
              defaultValue={data.whatsapp}
            />
            {errors.whatsapp && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="email@example.com"
              fullWidth
              variant="outlined"
              {...register("email", { required: true })}
              defaultValue={data.email}
            />
            {errors.email && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Informações do AVC
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="has-avc-in-the-family">Tem AVC na família?</InputLabel>
              <Select
                labelId="has-avc-in-the-family"
                id="investmentValue"
                value={hasAVCInTheFamily}
                label="Tem AVC na família?"
                onChange={handleChangeHasAVC}
                defaultValue={data.hasAvc}
              >
                <MenuItem value={1}>Sim</MenuItem>
                <MenuItem value={0}>Não</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="what-investment-value">Qual valor de investimento?</InputLabel>
              <Select
                labelId="what-investment-value"
                id="investmentValue"
                value={whatInvestmentValue}
                label="Qual valor de investimento?"
                onChange={handleChangeWhatInvestment}
                defaultValue={data.investmentValue}
              >
                <MenuItem value={1}>R$ 1000,00</MenuItem>
                <MenuItem value={2}>R$ 2000,00</MenuItem>
                <MenuItem value={3}>R$ 3000,00</MenuItem>
                <MenuItem value={4}>R$ 4000,00</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="condicao"
              name="condicao"
              label="Você possui outra condição que não seja AVC?"
              fullWidth
              variant="outlined"
              defaultValue={data.condicao}
              {...register("condicao", { required: true })}
            />
            {errors.condicao && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type='submit'
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
          >
            Avançar
          </Button>
        </Box>

      </form>
    </Container>
  );
}