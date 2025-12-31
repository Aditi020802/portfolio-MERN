export default function LogoutButton() {
  const logout = async () => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/logout`,
        {
          method: "POST",
          credentials: "include" // REQUIRED for cookies
        }
      );
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      // ✅ Always clear token and redirect
      localStorage.removeItem("accessToken");
      window.location.href = "/admin-login";
    }
  };

  return (
    <button className="logout-btn" onClick={logout}>
      Logout
    </button>
  );
}
