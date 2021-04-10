import React, { useState } from 'react'
import "./Login.css";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core"

export default function Login({history}){
    const [pseudo, setPseudo] = useState("");

  const paperStyle = {padding :20, height :'20vh', width :280, margin: "20px auto"} 

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center' margin={10}>
                <Avatar />
                <h2>S'identifier</h2>
            </Grid>
            <TextField value={pseudo} onChange={e => setPseudo(e.target.value)} label='Pseudo' placeholder='Entrez votre pseudo' fullWidth required/>
            <Button onClick={() =>{
                history.push('/logged/?' + pseudo)
            }} type='submit' color='rgb(218, 221, 217)' variant="contained" fullWidth>Entrer</Button>
        </Paper>
    </Grid>
  );
}