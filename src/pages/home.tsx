import Content from '../components/templates/Content';
import Header from '../components/organisms/Header';
import Login from '../components/organisms/Login';
import Footer from '../components/organisms/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Content>
        <div>Home</div>
        <Login />
      </Content>
      <Footer />
    </>
  );
};

export default Home;
