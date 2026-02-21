import { Card, Grid } from "@mui/material";

const SignIn = () => {
    return <Grid container width={'50vw'} ml={50} mt={10}>
        <Card style={{height:'40vh', width: "30vw", borderRadius:'20px', backgroundColor:'#87CEFA'}}>
            <Grid container>
                <Grid size={{sm: 12}} sx={{padding: 2, paddingBottom: 0, fontSize: 18, color: '#A04B45'}}>
                    <b>Sign In</b>
                </Grid>
                <Grid size={{sm: 12}}>
                    <hr color="black"></hr>
                </Grid>
                <Grid size={{sm: 12}}>
                    <Grid container p={2} ml={5}>
                        <Grid container p={1}>
                            <Grid size={{sm: 12}} color={'#A04B45'}>
                                <b>Username/Email</b>
                            </Grid>
                            <Grid size={{sm: 12}} pt={1}>
                                <input style={{height:'20px', borderRadius: '20px', backgroundColor: '#B0C4DECC', border: 'white'}}></input>
                            </Grid>
                        </Grid>
                        <Grid container p={1}>
                            <Grid size={{sm: 12}} color={'#A04B45'}>
                                <b>Password</b>
                            </Grid>
                            <Grid size={{sm: 12}} pt={1}>
                                <input style={{height:'20px', borderRadius: '20px', backgroundColor: '#B0C4DECC', border: 'white'}}></input>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Grid>
};

export default SignIn;