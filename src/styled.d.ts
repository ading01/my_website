// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    texts: {
      primary: string;
      secondary: string;
      paragraph: string;
    };
    // Add other theme property types here
  }
}
