import { MenuItem } from '../src/models/menuItem';
import { addMenuItem, fetchMenuItems } from '../src/services/menuService';

describe('Menu Service', () => {
    beforeEach(() => {
        // Reset the menu items before each test
        // Assuming there's a way to clear the menu items in the service
    });

    test('should add a new menu item', () => {
        const newItem = new MenuItem(1, 'Burger', 'Delicious beef burger', 5.99);
        addMenuItem(newItem);
        const items = fetchMenuItems();
        expect(items).toContainEqual(newItem);
    });

    test('should fetch all menu items', () => {
        const item1 = new MenuItem(1, 'Burger', 'Delicious beef burger', 5.99);
        const item2 = new MenuItem(2, 'Fries', 'Crispy golden fries', 2.99);
        addMenuItem(item1);
        addMenuItem(item2);
        const items = fetchMenuItems();
        expect(items).toEqual(expect.arrayContaining([item1, item2]));
    });

    test('should not add duplicate menu items', () => {
        const newItem = new MenuItem(1, 'Burger', 'Delicious beef burger', 5.99);
        addMenuItem(newItem);
        addMenuItem(newItem); // Attempt to add the same item again
        const items = fetchMenuItems();
        expect(items).toHaveLength(1);
    });
});