import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs: {
    //   toc: {
    //     headingSelector: 'h1, h2, h3',
    //     title: 'Table of Contents',
    //     disable: false,
    //   },
    // },
  },
};

export default preview;
