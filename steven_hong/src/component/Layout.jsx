import Footer from './Footer';
import Header from './Header';
import Main from './Main';
const Layout = () => {
  return (
    <>
      <Route exact path="/" component={Layout} />
      <Route path="/about" component={Layout} />
      <Header />
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
