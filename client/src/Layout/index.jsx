import NavBar from "../components/NavBar";

// eslint-disable-next-line
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
