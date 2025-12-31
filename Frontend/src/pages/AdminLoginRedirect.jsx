import { useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";

export default function AdminLoginRedirect() {
  const navigate = useNavigate();
  return <AdminLogin onSuccess={() => navigate("/admin")} />;
}
