const appTheme = (isDarkTheme: boolean) => ({
  palette: {
    type: isDarkTheme ? 'dark' : 'light',
    primary: {
      main: isDarkTheme ? '#ffff00' : '#0000ff' // !TODO customize
    },
    tableBackground: { main: isDarkTheme ? '#666565' : '#ffffff' },
    background: {
      default: isDarkTheme ? '#828282' : '#ffffff',
      paper: isDarkTheme ? '#828282' : '#ffffff',
      nav: isDarkTheme ? '#ffffff' : '#d2d2d2',
      grey: isDarkTheme ? '#666565' : '#ffffff'
    },
    text: {
      primary: isDarkTheme ? '#ffffff' : '#000000',
      secondary: isDarkTheme ? '#000000' : '#d2d2d2'
    }
  }
})

export default appTheme
