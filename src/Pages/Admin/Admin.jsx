
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    FiRefreshCw,
    FiLogOut,
    FiSearch,
    FiCheck,
    FiX,
    FiCalendar,
    FiUsers,
    FiClock,
    FiCheckCircle,
    FiXCircle,
    FiLock,
    FiUnlock,
    FiAlertCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const API_URL = "https://script.google.com/macros/s/AKfycbwOCD4R2DvfACI7s00A_qAAx3OeOROibddlC5selPQLrCWFj22izog8-c6oqj_CuTys/exec";

const Admin = ({ adminKey, onLogout }) => {
    const [bookings, setBookings] = useState([]);
    const [blockedDates, setBlockedDates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [updatingId, setUpdatingId] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const [blockDateValue, setBlockDateValue] = useState("");
    const [blockRemarks, setBlockRemarks] = useState("");

    const postRequest = async (payload) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
                ...payload,
                adminKey,
            }),
        });

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || "Request failed.");
        }

        return result;
    };

    const navigate = useNavigate();

    const loadDashboard = async (isRefresh = false) => {
        if (isRefresh) {
            setRefreshing(true);
        } else {
            setLoading(true);
        }

        setError("");

        try {
            const bookingResult = await postRequest({
                action: "adminBookings",
            });

            const bookingList =
                bookingResult.bookings ||
                bookingResult.data ||
                [];

            setBookings(bookingList);

            const availabilityResponse = await fetch(
                `${API_URL}?action=availability`
            );

            const availabilityResult = await availabilityResponse.json();

            if (availabilityResult.success) {
                setBlockedDates(
                    availabilityResult.blockedDates || []
                );
            }
        } catch (err) {
            setError(err.message || "Unable to load dashboard.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        loadDashboard();
        // Initial dashboard load only.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getValue = (booking, ...keys) => {
        for (const key of keys) {
            if (
                booking[key] !== undefined &&
                booking[key] !== null
            ) {
                return booking[key];
            }
        }
        return "";
    };

   const getBookingId = useCallback(
    (booking) =>
        getValue(booking, "bookingId", "Booking ID", "bookingID"),
    []
);

const getEventDate = useCallback(
    (booking) =>
        getValue(booking, "eventDate", "Event Date"),
    []
);

const getCustomerName = useCallback(
    (booking) =>
        getValue(booking, "customerName", "Customer Name"),
    []
);

const getPhone = useCallback(
    (booking) =>
        getValue(booking, "phone", "Phone"),
    []
);

const getEmail = useCallback(
    (booking) =>
        getValue(booking, "email", "Email"),
    []
);

const getEventType = useCallback(
    (booking) =>
        getValue(booking, "eventType", "Event Type"),
    []
);

const getGuestCount = useCallback(
    (booking) =>
        getValue(booking, "guestCount", "Guest Count"),
    []
);

const getRequirements = useCallback(
    (booking) =>
        getValue(booking, "requirements", "Requirements"),
    []
);

const getStatus = useCallback(
    (booking) =>
        getValue(booking, "bookingStatus", "Booking Status", "status"),
    []
);

const getAmount = useCallback(
    (booking) =>
        getValue(booking, "amount", "Amount"),
    []
);

const getPaymentStatus = useCallback(
    (booking) =>
        getValue(booking, "paymentStatus", "Payment Status"),
    []
);

    const pendingCount = bookings.filter(
        (booking) =>
            String(getStatus(booking)).toLowerCase() === "pending"
    ).length;

    const approvedCount = bookings.filter(
        (booking) =>
            String(getStatus(booking)).toLowerCase() === "approved"
    ).length;

    const rejectedCount = bookings.filter(
        (booking) =>
            String(getStatus(booking)).toLowerCase() === "rejected"
    ).length;

    const filteredBookings = useMemo(() => {
        const searchText = search.trim().toLowerCase();

        return bookings.filter((booking) => {
            const status = String(getStatus(booking)).toLowerCase();

            const matchesFilter =
                filter === "All" ||
                status === filter.toLowerCase();

            const matchesSearch =
                !searchText ||
                String(getBookingId(booking)).toLowerCase().includes(searchText) ||
                String(getCustomerName(booking)).toLowerCase().includes(searchText) ||
                String(getPhone(booking)).toLowerCase().includes(searchText) ||
                String(getEmail(booking)).toLowerCase().includes(searchText);

            return matchesFilter && matchesSearch;
        });
}, [
    bookings,
    search,
    filter,
    getBookingId,
    getCustomerName,
    getEmail,
    getPhone,
    getStatus,
]);
    const handleStatusUpdate = async (bookingId, status) => {
        const confirmed = window.confirm(
            `Are you sure you want to ${status.toLowerCase()} this booking?`
        );

        if (!confirmed) return;

        setUpdatingId(bookingId);
        setError("");
        setMessage("");

        try {
            await postRequest({
                action: "updateBookingStatus",
                bookingId,
                status,
            });

            setMessage(`Booking ${status.toLowerCase()} successfully.`);
            await loadDashboard(true);
        } catch (err) {
            setError(err.message || "Unable to update booking.");
        } finally {
            setUpdatingId("");
        }
    };

    const handleBlockDate = async (e) => {
        e.preventDefault();

        if (!blockDateValue) {
            setError("Please select a date to block.");
            return;
        }

        setError("");
        setMessage("");

        try {
            await postRequest({
                action: "blockDate",
                eventDate: blockDateValue,
                remarks: blockRemarks.trim(),
            });

            setMessage("Date blocked successfully.");
            setBlockDateValue("");
            setBlockRemarks("");

            await loadDashboard(true);
        } catch (err) {
            setError(err.message || "Unable to block date.");
        }
    };

    const handleUnblockDate = async (date) => {
        const confirmed = window.confirm(
            `Unblock ${date}?`
        );

        if (!confirmed) return;

        setError("");
        setMessage("");

        try {
            await postRequest({
                action: "unblockDate",
                eventDate: date,
            });

            setMessage("Date unblocked successfully.");
            await loadDashboard(true);
        } catch (err) {
            setError(err.message || "Unable to unblock date.");
        }
    };

    const formatDate = (dateValue) => {
        if (!dateValue) return "-";

        const dateString = String(dateValue).split("T")[0];

        const parts = dateString.split("-");

        if (parts.length === 3) {
            const [year, month, day] = parts;

            if (
                year.length === 4 &&
                month.length === 2 &&
                day.length === 2
            ) {
                return `${day}-${month}-${year}`;
            }
        }

        return dateValue;
    };

    const normalizeBlockedDate = (item) => {
        if (typeof item === "string") return item;

        return (
            item.eventDate ||
            item.date ||
            item["Event Date"] ||
            ""
        );
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <div className="admin-header-brand">
                    <div className="admin-brand-icon">
                        <FiLock />
                    </div>

                    <div>
                        <span className="admin-brand-label">
                            SUSA THIRUMAL AUDITORIUM
                        </span>
                        <h1>Booking Management</h1>
                    </div>
                </div>

                <div className="admin-header-actions">
                    <button
                        type="button"
                        className="admin-refresh-btn"
                        onClick={() => loadDashboard(true)}
                        disabled={refreshing}
                    >
                        <FiRefreshCw
                            className={refreshing ? "admin-spin" : ""}
                        />
                        {refreshing ? "Refreshing..." : "Refresh"}
                    </button>

                    <button
                        type="button"
                        className="admin-logout-btn"
                        onClick={() => {
                            onLogout();
                            navigate("/");
                        }}
                    >
                        <FiLogOut />
                        Logout
                    </button>
                </div>
            </header>

            <main className="admin-main">
                <div className="admin-welcome">
                    <div>
                        <span className="admin-welcome-eyebrow">
                            ADMIN PANEL
                        </span>
                        <h2>Dashboard Overview</h2>
                        <p>
                            Manage bookings, customers and auditorium
                            availability.
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="admin-alert admin-alert-error">
                        <FiAlertCircle />
                        {error}
                    </div>
                )}

                {message && (
                    <div className="admin-alert admin-alert-success">
                        <FiCheckCircle />
                        {message}
                    </div>
                )}

                <section className="admin-stats">
                    <div className="admin-stat-card">
                        <div className="admin-stat-icon">
                            <FiUsers />
                        </div>
                        <div>
                            <span>Total Bookings</span>
                            <h3>{bookings.length}</h3>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <div className="admin-stat-icon pending">
                            <FiClock />
                        </div>
                        <div>
                            <span>Pending</span>
                            <h3>{pendingCount}</h3>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <div className="admin-stat-icon approved">
                            <FiCheckCircle />
                        </div>
                        <div>
                            <span>Approved</span>
                            <h3>{approvedCount}</h3>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <div className="admin-stat-icon rejected">
                            <FiXCircle />
                        </div>
                        <div>
                            <span>Rejected</span>
                            <h3>{rejectedCount}</h3>
                        </div>
                    </div>
                </section>

                <section className="admin-bookings-section">
                    <div className="admin-section-heading">
                        <div>
                            <h2>Bookings</h2>
                            <p>Review and manage customer requests.</p>
                        </div>
                    </div>

                    <div className="admin-booking-tools">
                        <div className="admin-search-box">
                            <FiSearch />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search name, phone or booking ID..."
                            />
                        </div>

                        <div className="admin-filter-buttons">
                            {["All", "Pending", "Approved", "Rejected"].map(
                                (item) => (
                                    <button
                                        type="button"
                                        key={item}
                                        className={
                                            filter === item
                                                ? "admin-filter active"
                                                : "admin-filter"
                                        }
                                        onClick={() => setFilter(item)}
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {loading ? (
                        <div className="admin-loading">
                            <FiRefreshCw className="admin-spin" />
                            <p>Loading booking records...</p>
                        </div>
                    ) : filteredBookings.length === 0 ? (
                        <div className="admin-empty">
                            <FiCalendar />
                            <h3>No bookings found</h3>
                            <p>
                                No records match your search or selected filter.
                            </p>
                        </div>
                    ) : (
                        <div className="admin-booking-list">
                            {filteredBookings.map((booking, index) => {
                                const bookingId = getBookingId(booking);
                                const status = String(
                                    getStatus(booking) || "Pending"
                                );

                                return (
                                    <article
                                        className="admin-booking-card"
                                        key={bookingId || index}
                                    >
                                        <div className="admin-booking-card-top">
                                            <div>
                                                <span className="admin-booking-id">
                                                    {bookingId || "Booking"}
                                                </span>

                                                <h3>{getCustomerName(booking) || "Customer"}</h3>

                                                <span
                                                    className={`admin-status ${status.toLowerCase()}`}
                                                >
                                                    {status}
                                                </span>
                                            </div>

                                            <div className="admin-booking-date">
                                                <FiCalendar />
                                                <span>
                                                    {formatDate(getEventDate(booking))}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="admin-booking-details">
                                            <div>
                                                <span>Phone</span>
                                                <strong>{getPhone(booking) || "-"}</strong>
                                            </div>

                                            <div>
                                                <span>Email</span>
                                                <strong>{getEmail(booking) || "-"}</strong>
                                            </div>

                                            <div>
                                                <span>Event Type</span>
                                                <strong>{getEventType(booking) || "-"}</strong>
                                            </div>

                                            <div>
                                                <span>Guests</span>
                                                <strong>{getGuestCount(booking) || "-"}</strong>
                                            </div>

                                            <div>
                                                <span>Payment Status</span>
                                                <strong>
                                                    {getPaymentStatus(booking) || "Unpaid"}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Amount</span>
                                                <strong>
                                                    {getAmount(booking)
                                                        ? `₹ ${getAmount(booking)}`
                                                        : "-"}
                                                </strong>
                                            </div>
                                        </div>

                                        {getRequirements(booking) && (
                                            <div className="admin-requirements">
                                                <span>Requirements / Address</span>
                                                <p>{getRequirements(booking)}</p>
                                            </div>
                                        )}

                                        {status.toLowerCase() === "pending" && (
                                            <div className="admin-booking-actions">
                                                <button
                                                    type="button"
                                                    className="admin-approve-btn"
                                                    disabled={updatingId === bookingId}
                                                    onClick={() =>
                                                        handleStatusUpdate(
                                                            bookingId,
                                                            "Approved"
                                                        )
                                                    }
                                                >
                                                    <FiCheck />
                                                    {updatingId === bookingId
                                                        ? "Updating..."
                                                        : "Approve"}
                                                </button>

                                                <button
                                                    type="button"
                                                    className="admin-reject-btn"
                                                    disabled={updatingId === bookingId}
                                                    onClick={() =>
                                                        handleStatusUpdate(
                                                            bookingId,
                                                            "Rejected"
                                                        )
                                                    }
                                                >
                                                    <FiX />
                                                    Reject
                                                </button>
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>

                <section className="admin-availability-section">
                    <div className="admin-section-heading">
                        <div>
                            <h2>Manage Availability</h2>
                            <p>Block dates when the auditorium is unavailable.</p>
                        </div>
                    </div>

                    <form
                        className="admin-block-date-form"
                        onSubmit={handleBlockDate}
                    >
                        <div className="admin-form-field">
                            <label htmlFor="blockDate">Date</label>
                            <input
                                id="blockDate"
                                type="date"
                                value={blockDateValue}
                                onChange={(e) =>
                                    setBlockDateValue(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="admin-form-field">
                            <label htmlFor="blockRemarks">Reason / Remarks</label>
                            <input
                                id="blockRemarks"
                                type="text"
                                value={blockRemarks}
                                onChange={(e) =>
                                    setBlockRemarks(e.target.value)
                                }
                                placeholder="Maintenance, private event, etc."
                            />
                        </div>

                        <button
                            type="submit"
                            className="admin-block-submit"
                        >
                            <FiLock />
                            Block Date
                        </button>
                    </form>

                    <div className="admin-blocked-list">
                        <h3>Blocked Dates</h3>

                        {blockedDates.length === 0 ? (
                            <div className="admin-no-blocked">
                                No blocked dates currently.
                            </div>
                        ) : (
                            blockedDates.map((item, index) => {
                                const date = normalizeBlockedDate(item);

                                if (!date) return null;

                                return (
                                    <div
                                        className="admin-blocked-item"
                                        key={`${date}-${index}`}
                                    >
                                        <div>
                                            <FiLock />
                                            <strong>{formatDate(date)}</strong>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => handleUnblockDate(date)}
                                            title="Unblock date"
                                        >
                                            <FiUnlock />
                                            Unblock
                                        </button>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </section>

                <footer className="admin-footer">
                    <FiLock />
                    <span>
                        SUSA Thirumal Auditorium · Admin Management
                    </span>
                </footer>
            </main>
        </div>
    );
};

export default Admin;
