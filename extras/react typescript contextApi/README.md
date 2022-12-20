## working flow

- first in ThemeContext.tsx it has the main context Api
> children type

```
  children: React.ReactNode;
```
- initial props is being stored in theme.ts file
```
export const theme = {
  primary: {
    main: "#3f51b5",
    text: "#fff",
  },
  secondary: {
    main: "#f50057",
    text: "#fff",
  },
};
<!-- important part typefo can get the defined values type -->
export type ThemeProps = typeof theme;
```
- after completing the context api then it is time to wrap the app.tsx app/root

- after finishing all task we can get the data in Box.tsx component by useContext