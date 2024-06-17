export function getRelativeTime(timestamp: string): string {
    const now = new Date();
    const past = new Date(timestamp);
    const deltaMilliseconds = now.getTime() - past.getTime();
    
    const minutes = deltaMilliseconds / 1000 / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30; // Rough approximation
    const years = days / 365; // Rough approximation
    
    if (years >= 1) {
        return `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''}`;
    } else if (months >= 1) {
        return `${Math.floor(months)} month${Math.floor(months) > 1 ? 's' : ''}`;
    } else if (days >= 1) {
        return `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''}`;
    } else if (hours >= 1) {
        return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''}`;
    } else {
        return `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? 's' : ''}`;
    }
}

// Example usage
