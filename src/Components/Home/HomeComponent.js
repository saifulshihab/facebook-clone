import React from 'react';
import { Grid } from '@material-ui/core';

import Newsfeed from './NewsFeed';
import Leftsidebar from './LeftSidebar';
import Rightsidebar from './RightSidebar';

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Leftsidebar />
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}

export default Home;
