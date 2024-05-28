import { Box, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react';
import { leftSideMenuData } from '../../data/ViewDatas';
import StructItem from './struct/StructItem';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    }
})

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const SideBar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", height: "100%", margin: "0", padding: '0', display: 'flex' }}>
            <Box
                sx={{ bgcolor: '#222', display: 'flex', height: "100%" }}
            >
                <ThemeProvider theme={theme}>
                    <Tabs
                        orientation="vertical"
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                    >
                        {
                            leftSideMenuData.map(value => <Tab key={value.id} icon={value.icons} label={value.itemlabel} {...a11yProps(value.id)} sx={{
                                padding: "0",
                                margin: '0',
                                minWidth: '64px',
                                color: '#888'
                            }} />)
                        }
                    </Tabs>
                </ThemeProvider>


            </Box>
            <Box sx={{ bgcolor: '#444', display: 'flex', height: "100%" }}>
                <TabPanel value={value} index={0}>
                    <StructItem/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </Box>
        </Box>

    );
}

export default SideBar