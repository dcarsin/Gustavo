export function generateOrderSummary(order) {
    const { orderNumber, items, sauces, deliveryMethod, paymentMethod, address } = order;

    const itemDetails = items.map(item => `${item.name} (Price: $${item.price})`).join(', ');
    const sauceDetails = sauces.map(sauce => sauce.name).join(', ');

    return `
        Order Summary:
        Order Number: ${orderNumber}
        Items: ${itemDetails}
        Sauces: ${sauceDetails}
        Delivery Method: ${deliveryMethod}
        Payment Method: ${paymentMethod}
        Address: ${address.street}, ${address.city} ${address.additionalInfo ? `(${address.additionalInfo})` : ''}
    `;
}