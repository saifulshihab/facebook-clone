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
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Rightsidebar />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
