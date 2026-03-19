const { Authcontext } = require("@/context/authcontext");
const { useContext } = require("react");

const useAuth = () => {
  const context = useContext(Authcontext);
  return context;
};

export default useAuth;
