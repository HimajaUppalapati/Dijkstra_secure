import { Grid } from "@mui/material"
import appicon from "../assets/appicon.svg"

const Headers = () => {
    const path =  window.location.pathname
    const handleSignIn = (event: any) => {
        window.location.pathname = '/signin'
    }
    const handleSignUp = (event: any) => {
        window.location.pathname = '/signup'
    }
    const handleHomepage = (event: any) => {
        window.location.pathname = '/'
    }
    const isAdmin: boolean = true

    if(path === '/' || path === '/signin' || path === '/signup'){
        return <Grid container sx={{marginLeft: '10px'}}>
                    <Grid size={{sm:0.8, md: 0.8, lg: 0.8}}>
                        <img style={{height: '40px', marginTop: '14px'}} src={appicon.toString()} alt=""/>
                    </Grid> 
                    <Grid size={{sm:9, md: 9, lg: 9}}>
                        <b onClick={handleHomepage} style={{cursor: 'pointer', color: '#DA9100', fontSize: '57px'}}>Dijkstra</b>
                    </Grid>
                    <Grid container sx={{marginTop: '25px'}}>
                        <Grid size={{sm: 8, md: 8, lg: 8}}>
                            <b onClick={handleSignIn} style={{cursor: 'pointer', color: '#DA9100', fontSize: '25px'}}>SignIn</b>
                        </Grid>
                        <Grid size={{sm: 4, md: 4, lg: 4}}>
                            <b onClick={handleSignUp} style={{cursor: 'pointer', color: '#DA9100', fontSize: '25px'}}>SignUp</b>
                        </Grid>
                    </Grid>
                </Grid>
    }

    else if(path === '/loggedin' || path === '/loggedin/create'){
        return <Grid container sx={{marginLeft: '10px'}}>
                    <Grid size={{sm:0.8, md: 0.8, lg: 0.8}}>
                        <img style={{height: '40px', marginTop: '14px'}} src={appicon.toString()} alt=""/>
                    </Grid> 
                    <Grid size={{sm:9, md: 9, lg: 9}}>
                        <b onClick={handleHomepage} style={{cursor: 'pointer', color: '#DA9100', fontSize: '57px'}}>Dijkstra</b>
                    </Grid>
                    <Grid container sx={{marginTop: '25px'}}>
                        <Grid size={{sm: 4, md: 4, lg: 4}} sx={{visibility: 'hidden'}}>
                            <b onClick={handleSignIn} style={{cursor: 'pointer', color: '#DA9100', fontSize: '25px'}}>SignIn</b>
                        </Grid>
                        <Grid size={{sm: 8, md: 8, lg: 8}} sx={{visibility: isAdmin ? 'visible' : 'hidden'}}>
                            <b onClick={()=>{}} style={{cursor: 'pointer', color: '#DA9100', fontSize: '25px'}}>Dashboard</b>
                        </Grid>
                    </Grid>
                </Grid>
    }

    return <div style={{color: 'orange'}}>This is a header</div>
}

export default Headers