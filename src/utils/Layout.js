import React from 'react';

import DarkTheme from 'Styles/theme/DarkTheme';
import LightTheme from 'Styles/theme/LightTheme';
import ErrorTheme from 'Styles/theme/ErrorTheme';

const withLayout = (Layout, Component) => (
  <Layout>
    <Component />
  </Layout>
);

export const withLightLayout = (Component) => () => withLayout(LightTheme, Component);
export const withDarkLayout = (Component) => () => withLayout(DarkTheme, Component);
export const withErrorLayout = (Component) => () => withLayout(ErrorTheme, Component);
