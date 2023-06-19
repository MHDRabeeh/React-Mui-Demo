import { Button, Stack } from "@mui/material"
const MuiBotton = () => {
    return (
        <Stack spacing={2} direction={"row"}>
            <Button variant="text">Text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">  outline</Button>
        </Stack>
    )
}

export default MuiBotton
