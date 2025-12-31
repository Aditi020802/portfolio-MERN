export default function LogoutButton() {
  const logout = async () => {
    await fetch(
      "http://localhost:5050/api/admin/logout",
      {
        method: "POST",
        credentials: "include"
      }
    );

    localStorage.removeItem("accessToken");
    window.location.href = "/admin-login";
  };

  return <button className="logout-btn" onClick={logout}>Logout</button>;
}
