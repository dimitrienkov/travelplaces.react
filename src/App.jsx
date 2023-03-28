import React from 'react';

import {App, View,} from 'framework7-react';
import {QueryClient, QueryClientProvider} from 'react-query';


import routes from '@/routes';
//import store from '../js/store';

import PanelRight from '@/components/PanelRight';
import PanelLeft from "@/components/PanelLeft";

const MyApp = () => {
    const f7params = {
        name: 'Travel App',
        theme: 'auto',
        view: {
            browserHistory: true,
            browserHistorySeparator: ''
        },
        autoDarkMode: true,
        //store: store,
        routes: routes,
        serviceWorker: process.env.NODE_ENV === 'production' ? {
            path: '/service-worker.js',
        } : {},
    };

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <App {...f7params} >
                <PanelLeft/>
                <PanelRight/>
                <View main url="/"/>
            </App>
        </QueryClientProvider>
    );
}
export default MyApp;