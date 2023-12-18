import { useNavigate } from "react-router-dom"
const Logo: React.FC = () => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/');
  };
    return(
  <div className="cursor-pointer" onClick={handleLogoClick}>
    <img src="/Logo.png" alt="logo" />
  </div>
    )
}
export default Logo;