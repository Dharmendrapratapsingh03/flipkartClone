import { useEffect } from 'react';

import { Fragment } from 'react';
//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import { Box, styled } from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
     padding: 20px 10px;
     background: #F2F2F2;
` 

const Home = () => {

    const { products } = useSelector(state => state.getProducts);

    
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
        <NavBar />
        <Component>
           <Banner />
           <MidSlide products={products} title="Deal of the day" timer={true} />
           <MidSection />
           <Slide products={products} title="Discounts for you" timer={false} />
           <Slide products={products} title="Suggesting Items" timer={false} />
           <Slide products={products} title="Top Selection" timer={false} />
           <Slide products={products} title="Recommended Items" timer={false} />
           <Slide products={products} title="Trending Offers" timer={false} />
           <Slide products={products} title="Season's Top picks" timer={false} />
           <Slide products={products} title="Top Deals on Accessories" timer={false} />


        </Component>
        
        </>
    )
}

export default Home;