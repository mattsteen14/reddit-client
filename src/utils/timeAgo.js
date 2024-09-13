export const timeAgo = utcSeconds => {
    // Convert UTC seconds to milliseconds
    const postDate = new Date(utcSeconds * 1000);
    const currentDate = new Date();
    // Calculate the difference in milliseconds
    const timeDifference = currentDate - postDate;
    // Calculate time units in milliseconds
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximate
    const years = Math.floor(days / 365); // Approximate
    //Return a human-readable format based on the time difference
    if (years > 0) {
        return years === 1 ? '1y' : `${years}y`;
    } else if (months > 0) {
        return months === 1 ? '1mo' : `${months}mo`;
    } else if (days > 0) {
        return days === 0 ? '1d' : `${days}d`;
    } else if (hours > 0) {
        return hours === 1 ? '1h' : `${hours}h`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1m' : `${minutes}m`;
    } else if (seconds > 0) {
        return seconds === 1 ? '1s' : `${seconds}s`;
    } else {
        return 'Just now.';
    }
}