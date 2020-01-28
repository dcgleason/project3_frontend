import React, {Component} from 'react';
import App from 'next/app';
import index from './index'
import Search from './Search'
import RestForm from './RestForm'
import RvwForm from './RvwForm'
import SingleRestraunt from './SingleRestraunt'

class MyApp extends {App, Component} {
constructor(props) {
super(props);
this.state = {
keywords : null,
location : null,
_id : null
}
}

    render() {
        const { index, pageProps } = this.props;

        return(

        <MainLayout>
 <index />;
            </MainLayout>
        )}
}

export default MyApp;