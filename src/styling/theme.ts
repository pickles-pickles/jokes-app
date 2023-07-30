const appTheme = (isDarkTheme: boolean) => ({
  palette: {
    type: isDarkTheme ? 'dark' : 'light',
    primary: {
      main: isDarkTheme ? '#ffff00' : '#0000ff' // !TODO customize
    },
    background: {
      default: isDarkTheme ? '#000000' : '#ffffff',
      paper: isDarkTheme ? '#000000' : '#ffffff'
    },
    text: {
      primary: isDarkTheme ? '#ffffff' : '#000000',
      secondary: isDarkTheme ? '#ffffff' : '#d2d2d2'
    }
  }
})

export default appTheme
