import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import styles from "../../styles/styles.module.scss";

import { useFormData } from "../../context";

export const LocationInfox = ({ formStep, nextFormStep, prevFormStep }) => {
  const { data, setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <Container className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Localização
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cep"
              name="cep"
              label="CEP"
              fullWidth
              autoComplete="zip-code"
              variant="outlined"
              {...register("cep", { required: true })}
              defaultValue={data.cep}
            />
            {errors.cep && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="estado"
              name="estado"
              label="Estado"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              {...register("estado", { required: true })}
              defaultValue={data.estado}
            />
            {errors.estado && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cidade"
              name="cidade"
              label="Cidade"
              fullWidth
              variant="outlined"
              {...register("cidade", { required: true })}
              defaultValue={data.cidade}
            />
            {errors.cidade && <span className={styles.error}>Campo obrigatório</span>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="distanciaMax"
              name="distanciaMax"
              label="Distância máxima desejada (km)"
              fullWidth
              variant="outlined"
              {...register("distanciaMax")}
              defaultValue={data.distanciaMax}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="button" onClick={prevFormStep} sx={{ mt: 3, ml: 1 }}>
            Voltar
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
          >
            Confirmar
          </Button>
        </Box>
      </form>
    </Container>
  );
}