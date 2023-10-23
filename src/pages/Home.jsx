import React from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { NavBar } from '../components/Navbar';
import styles from '../styles/styles.module.scss';

export default function Home() {
  const navigate = useNavigate();

  const handleForms = () => navigate('/forms');

  return (
    <Container disableGutters maxWidth="xl" component="main" className={styles.mainContent}>
      <NavBar companyName='Neurobots' />
      <Container disableGutters maxWidth="md" component="div" sx={{
        marginTop: '20vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        flexDirection: 'column'
      }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{
            color: '#fff',
            fontSize: '40px',
            fontWeight: '600',
            fontFamily: 'Poppins'
          }}
        >
          Tecnologia em saúde ao alcance de todos
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{
          color: '#fff',
          fontFamily: 'Poppins',
          fontSize: '17px',
          fontWeight: '300'
        }}>
          A Neurobots existe para tornar a vida das pessoas melhor através de tecnologia. Tornamos acessíveis soluções eficientes e inovadoras em saúde.
        </Typography>

        <Button fullWidth variant="contained" sx={{ marginTop: '2rem' }} onClick={handleForms}>
          Procurar profissionais
        </Button>
      </Container>
    </Container >
  );
}