import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Container from "../container/Container";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;
