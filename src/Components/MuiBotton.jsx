import { Button, Stack,IconButton, ButtonGroup} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
const MuiBotton = () => {
    return (
        <>
        <Stack spacing={2} direction={"row"}>
            <Button variant="text" color="success">Text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">  outline</Button>
        </Stack>
        <Stack direction={'row'} spacing={2} display={"block"} >
          <Button variant="contained" size="small">small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">large</Button>
          <Button><SendIcon/></Button> 
        
        </Stack>
        <Stack direction={'row'} spacing={2} >
            <Button variant="contained" startIcon={<SendIcon/>}>send</Button>
            <Button variant="contained" endIcon={<SendIcon/>}>send</Button>
            <IconButton><SendIcon/></IconButton>
        </Stack>
        <Stack direction={'row'} spacing={2} display={'block'}>
          <ButtonGroup variant="outlined">
            <Button>left</Button>
            <Button>center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" orientation="vertical">
            <Button>left</Button>
            <Button>center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="text">
            <Button aria-label="Submit form">left</Button>
            <Button>center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        </>
    )
}

export default MuiBotton
