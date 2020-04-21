import React from 'react';

import DarkTheme from 'Styles/theme/DarkTheme';
import LightTheme from 'Styles/theme/LightTheme';

const withLayout = (Layout, Component) => (
  <Layout>
    <Component />
  </Layout>
);

export const withLightLayout = (Component) => () => withLayout(LightTheme, Component);
export const withDarkLayout = (Component) => () => withLayout(DarkTheme, Component);
