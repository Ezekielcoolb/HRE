import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";
import Nav from "../GuestPages/Nav";
import Footer from "../GuestPages/Footer";

const GeneralRap = styled.div`

`

export default function General () {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <GeneralRap>
<Nav />
        <Outlet />
        <Footer />
        </GeneralRap>
    )
}