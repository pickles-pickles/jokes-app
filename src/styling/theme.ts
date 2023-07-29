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
      secondary: isDarkTheme ? '#ffffff' : '#000000'
    }
  }
})

export default appTheme
