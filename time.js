function getLogTime() {
    // Returns clean, unstyled 24-hour time (e.g., "19:45:00")
    return new Date().toLocaleTimeString([], { hour12: false });
}

// Example usage inside your logging mechanism:
console.log(`[${getLogTime()}] Event triggered.`);
