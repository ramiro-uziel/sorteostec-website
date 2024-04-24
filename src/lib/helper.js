export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-MX", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
    }).format(date);
};

export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function formatCurrency(itr) {
    const amount = Math.abs(itr);
    const formattedAmount = `$${amount.toLocaleString()}`;
    return itr < 0 ? `-${formattedAmount}` : formattedAmount;
}
