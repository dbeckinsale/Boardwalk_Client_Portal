﻿import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import makeRequest from '../components/Make-Request';



export default () => (
    <div>
        <Layout>
            <Route path='/' component={makeRequest} />
        </Layout>

    </div>
);