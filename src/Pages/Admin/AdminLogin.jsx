
import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import "./AdminLogin.css";

const API_URL = "https://script.google.com/macros/s/AKfycbwOCD4R2DvfACI7s00A_qAAx3OeOROibddlC5selPQLrCWFj22izog8-c6oqj_CuTys/exec";

const AdminLogin = ({ onLogin }) => {
  const [adminKey, setAdminKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!adminKey.trim()) {
      setError("Please enter your admin key.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          action: "adminLogin",
          adminKey: adminKey.trim(),
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Login failed.");
      }

      onLogin(adminKey.trim());
    } catch (err) {
      setError(err.message || "Unable to verify admin key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <div className="admin-login-lock">
            <FiLock />
          </div>
        </div>

        <div className="admin-login-heading">
          <span className="admin-login-label">SUSA THIRUMAL AUDITORIUM</span>

          <h1>Admin Portal</h1>

          <p>
            Sign in to manage auditorium bookings,
            availability and customer requests.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <label htmlFor="adminKey">Admin Access Key</label>

          <div className="admin-key-input">
            <input
              id="adminKey"
              type={showKey ? "text" : "password"}
              value={adminKey}
              onChange={(e) => {
                setAdminKey(e.target.value);
                setError("");
              }}
              placeholder="Enter your admin key"
              autoComplete="current-password"
            />

            <button
              type="button"
              className="admin-eye-button"
              onClick={() => setShowKey((prev) => !prev)}
              aria-label={showKey ? "Hide key" : "Show key"}
            >
              {showKey ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-submit"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Access Dashboard"}

            {!loading && <FiArrowRight />}
          </button>
        </form>

        <div className="admin-login-footer">
          <FiLock />
          <span>Restricted access for administration</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
