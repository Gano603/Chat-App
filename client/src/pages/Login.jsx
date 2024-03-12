import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt } from '@mui/icons-material';
import { VisuallyStyledComponent } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation } from '6pp'
import { usernameValidator } from '../utils/validators';


const Login = () => {

    const [isLogin, setisLogin] = useState(true);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const userName = useInputValidation("", usernameValidator);
    const password = useInputValidation("");

    const avatar = useFileHandler("single", 5);

    

    return (
        <div style={{
            backgroundImage: "url('/assets/chat-bg.jpg')",
            backgroundSize:'cover',
            backgroundPosition:'center',
        }}>
            <Container component={"main"} maxWidth={"sm"} sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <Paper elevation={3} sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>

                    {
                        isLogin ? (<>

                            <Typography variant='h5' sx={{
                                marginY: "1rem"
                            }}>
                                Login
                            </Typography>
                            <form style={{
                                width: "90%",
                            }}>
                                <TextField value={userName.value} onChange={userName.changeHandler} required fullWidth label="Username" margin='normal' variant='outlined' />
                                {
                                    userName.error &&
                                    <Typography color="error" variant='caption'>
                                        {userName.error}
                                    </Typography>
                                }
                                <TextField value={password.value} onChange={password.changeHandler} required fullWidth label="Passwword" type='password' margin='normal' variant='outlined' />
                                {
                                    password.error &&
                                    <Typography color="error" variant='caption'>
                                        {password.error}
                                    </Typography>
                                }
                                <Paper elevation={0} sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginY: "1rem"
                                }}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                    >
                                        Login
                                    </Button>

                                    <Typography sx={{
                                        marginX: "1rem"
                                    }}>Or</Typography>

                                    <Button
                                        variant='text'
                                        onClick={() => setisLogin(false)}
                                    >
                                        Register
                                    </Button>
                                </Paper>
                            </form>

                        </>) : (<>

                            <Typography variant='h5' sx={{
                                marginY: "1rem"
                            }}>
                                Register
                            </Typography>

                            <Stack sx={{
                                position: "relative",
                                width: "10rem",
                                margin: "auto"
                            }}>

                                <Avatar
                                    src={avatar.preview}
                                    sx={{
                                        height: "10rem",
                                        width: "10rem",
                                        objectFit: "contain",
                                    }} />

                                <IconButton sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    color: "white",
                                    right: 0,
                                    bgcolor: "rgb(0,0,0,0.5)",
                                    ":hover": {
                                        bgcolor: "rgb(0,0,0,0.8)"
                                    }
                                }}

                                    component="label"

                                >

                                    <>
                                        <CameraAlt />
                                        <VisuallyStyledComponent type='file' onChange={avatar.changeHandler} />
                                    </>

                                </IconButton>

                            </Stack>

                            {
                                avatar.error &&
                                <Typography m={"1rem"} color="error" variant='caption'>
                                    {avatar.error}
                                </Typography>
                            }



                            <form style={{
                                width: "90%",
                            }}>
                                <TextField value={name.value} onChange={name.changeHandler} required fullWidth label="Name" margin='normal' variant='outlined' />
                                {
                                    name.error &&
                                    <Typography color="error" variant='caption'>
                                        {name.error}
                                    </Typography>
                                }
                                <TextField value={userName.value} onChange={userName.changeHandler} required fullWidth label="Username" margin='normal' variant='outlined' />
                                {
                                    userName.error &&
                                    <Typography color="error" variant='caption'>
                                        {userName.error}
                                    </Typography>
                                }
                                <TextField value={bio.value} onChange={bio.changeHandler} required fullWidth label="Bio" margin='normal' variant='outlined' />
                                {
                                    bio.error &&
                                    <Typography color="error" variant='caption'>
                                        {bio.error}
                                    </Typography>
                                }
                                <TextField value={password.value} onChange={password.changeHandler} required fullWidth label="Passwword" type='password' margin='normal' variant='outlined' />
                                {
                                    password.error &&
                                    <Typography color="error" variant='caption'>
                                        {password.error}
                                    </Typography>
                                }
                                <Paper elevation={0} sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginY: "1rem"
                                }}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                    >
                                        Register
                                    </Button>

                                    <Typography sx={{
                                        marginX: "1rem"
                                    }}>Or</Typography>

                                    <Button
                                        variant='text'
                                        onClick={() => setisLogin(true)}
                                    >
                                        Login
                                    </Button>
                                </Paper>
                            </form>

                        </>)
                    }


                </Paper>

            </Container>
        </div>
    )
}

export default Login