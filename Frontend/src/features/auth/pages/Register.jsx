
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import "../auth.form.scss"

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/")
    }

    if (loading) {
        return (
            <main className="auth-main">
                <div className="loading-screen">
                    <div className="loader-ring"></div>
                    <p>Loading...</p>
                </div>
            </main>
        )
    }

    return (
        <main className="auth-main">
            {/* Background blobs */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="auth-wrapper">
                {/* Left Panel */}
                <div className="auth-left">
                    <div className="brand">
                        <div className="brand-icon">🎓</div>
                        <span className="brand-name">Job Prep</span>
                    </div>
                    <div className="illustration-area">
                        <div className="floating-card card-bulb">
                            <span>💡</span>
                        </div>
                        <div className="floating-card card-target">
                            <span>🎯</span>
                        </div>
                        <div className="floating-card card-clip">
                            <span>📋</span>
                        </div>
                        <div className="floating-card card-chart">
                            <span>📈</span>
                        </div>
                        <div className="floating-card card-bag">
                            <span>🌱</span>
                        </div>
                        <div className="hero-avatar">
                            <div className="avatar-circle">
                                <span className="avatar-emoji">🧑‍🎓</span>
                            </div>
                            <div className="avatar-glow"></div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="auth-right">
                    <div className="form-container">
                        <div className="form-header">
                            <h1>Register</h1>
                            <p>Create your account and start your journey</p>
                        </div>

                        <form onSubmit={handleSubmit}>

                            {/* Username */}
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </span>
                                    <input
                                        onChange={(e) => { setUsername(e.target.value) }}
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter username"
                                        value={username}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </span>
                                    <input
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        value={email}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={password}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="button primary-button" style={{ marginTop: '8px' }}>
                                <span>Register</span>
                            </button>

                        </form>

                        <p className="auth-footer-text">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register
