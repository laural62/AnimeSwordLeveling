//import { BASE_URL } from "../utils/url";

const BASE_URL = import.meta.env.VITE_SERVER_URL || "";

function buildUrl(path) {
  const base = String(BASE_URL).replace(/\/+$/g, "");
  return `${base}${path}`;
}

async function parseJsonSafe(response) {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
  
}

export async function signUp(values) {
  try {
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await parseJsonSafe(response);
    if (!response.ok) throw new Error((data && data.message) || "Erreur inscription utilisateur");
    return data;
  } catch (error) {
    console.log("signup error",error);
    throw error;
  }
}

export async function signIn(values) {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const userConnected = await response.json();
    return userConnected;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const response = await fetch(`${BASE_URL}/user/current`, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signout() {
  await fetch(`${BASE_URL}/user/deleteToken`, {
    method: "DELETE",
    credentials: "include",
  });
}

export async function requestPasswordReset({ email }) {
  try {
    const response = await fetch(buildUrl("/user/forgot-password"), {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error((data && data.message) || "Erreur envoi email de rÃ©initialisation");
    }
    return data;
  } catch (error) {
    console.error("requestPasswordReset error:", error);
    throw error;
  }
}

export async function resetPassword({ token, password }) {
  try {
    const response = await fetch(buildUrl(`/user/reset-password/${token}`), {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-type": "application/json" },  
    });
    const data = await response.json(); 
    if (!response.ok) {
      throw new Error((data && data.message) || "Erreur rÃ©initialisation du mot de passe");
    }
    return data;  
  } catch (error) {
    console.error("resetPassword error:", error);
    throw error;
  };  
}