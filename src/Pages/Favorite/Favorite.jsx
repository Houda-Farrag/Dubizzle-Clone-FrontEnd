import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { Card } from 'antd';
import Card1 from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button1 from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import CategorySub from '../../Components/CategorySubComp/CategorySub';

const { Meta } = Card;

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Favorite() {
    const favorite = useSelector((prod) => prod.favorite.fav)
    console.log(favorite)
    let search = favorite

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <>


        <CategorySub></CategorySub>
        <div className='min-h-48'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={<h1 className='font-bold text-black-500'>Favourites </h1>} {...a11yProps(0)} />
                        <Tab label={<h1 className='font-bold text-black-500'>Saved searches</h1>} {...a11yProps(1)} />

                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className='flex gap-2 flex-wrap'>
                        {(favorite.length > 0) && favorite.map((prod, i) => {
                            return <Card1 sx={{ maxWidth: 400, minWidth: 300 }} key={i}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={prod.images[0]}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {prod.name}
                                        <p className='font-serif text-xl text-red-400'>
                                            {prod.price} EGP
                                        </p>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {prod.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card1>
                        })}
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className='flex flex-wrap gap-2'>
                        {(search.length > 0) ? search.map((product) => {
                            return <Card1 sx={{ maxWidth: 400, minWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.images[0]}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card1>

                        }) : <div className='text-center bg-green-300 w-full'>No data</div>
                        }
                    </div>

                </CustomTabPanel>

            </Box >
        </div>
    </>
}

