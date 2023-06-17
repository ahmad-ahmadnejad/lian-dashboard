import { ThemeProvider, createTheme } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const lianTheme = createTheme({
    typography: {
      fontFamily: `"dana"`,
    },
  });
  return (
    <ThemeProvider theme={lianTheme}>
      <Header />
      <div
        className='h-full rounded-lg  bg-[#dfe6e9] mt-20 mr-4 ml-4 mb-4  md:mr-15 md:ml-15 md:mb-20 p-4'
        style={{ minHeight: '540px' }}
      >
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
