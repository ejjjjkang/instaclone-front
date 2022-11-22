import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { isLoginVar, isdarkMode } from './apollo';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles';

function Root() {
  const isLoggedIn = useReactiveVar(isLoginVar)
  const isDarkMode = useReactiveVar(isdarkMode)
  
  return (
    <div>
      <Header />
      <ThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
        <Outlet context={{ Login: isLoggedIn }} />
        </ThemeProvider>
   </div>
  );
}

export default Root;
