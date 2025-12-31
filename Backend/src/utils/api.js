let accessToken = localStorage.getItem("accessToken");

export const apiFetch = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: "Bearer " + accessToken
    },
    credentials: "include"
  });

  if (res.status === 401) {
    const refresh = await fetch(
      "http://localhost:5050/api/admin/refresh",
      { method: "POST", credentials: "include" }
    );

    if (refresh.ok) {
      const data = await refresh.json();
      accessToken = data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      return apiFetch(url, options); // retry
    }
  }

  return res;
};
