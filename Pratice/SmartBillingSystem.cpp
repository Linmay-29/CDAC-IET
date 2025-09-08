#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;

const int MAX_ITEMS = 10;

class Item {
public:
    int itemID;
    char itemName[50];
    float price;
    int stockQuantity;

    Item() {}

    Item(int id, const char* name, float p, int qty) {
        if (p < 0 || qty < 0)
            throw "Price or quantity cannot be negative.";
        itemID = id;
        strcpy(itemName, name);
        price = p;
        stockQuantity = qty;
    }

    void reduceStock(int qty) {
        if (qty > stockQuantity)
            throw "Not enough stock available.";
        stockQuantity -= qty;
    }
};

class Bill {
    int billID;
    char customerName[50];
    Item purchasedItems[MAX_ITEMS];
    int quantities[MAX_ITEMS];
    int itemCount;

public:
    Bill(int id, const char* name) {
        billID = id;
        strcpy(customerName, name);
        itemCount = 0;
    }

    // Overload + to add item
    Bill& operator+(pair<Item*, int> purchase) {
        if (itemCount >= MAX_ITEMS)
            throw "Cannot add more items to the bill.";
        if (purchase.second <= 0)
            throw "Quantity must be positive.";

        purchase.first->reduceStock(purchase.second);
        purchasedItems[itemCount] = *purchase.first;
        quantities[itemCount] = purchase.second;
        itemCount++;
        return *this;
    }

    // Overload << to display bill
    friend ostream& operator<<(ostream& os, const Bill& bill) {
        if (bill.itemCount == 0)
            throw "Cannot generate an empty bill.";

        os << "Bill ID: " << bill.billID << "\nCustomer: " << bill.customerName << "\n";
        os << "----------------------------------------\n";
        os << "ItemID\tName\t\tQty\tPrice\n";
        float total = 0;
        for (int i = 0; i < bill.itemCount; i++) {
            os << bill.purchasedItems[i].itemID << "\t"
               << bill.purchasedItems[i].itemName << "\t"
               << bill.quantities[i] << "\t"
               << bill.purchasedItems[i].price * bill.quantities[i] << "\n";
            total += bill.purchasedItems[i].price * bill.quantities[i];
        }
        os << "----------------------------------------\n";
        os << "Total Amount: ₹" << total << "\n";
        return os;
    }

    void saveToFile(const char* filename) {
        ofstream file(filename, ios::app);
        if (!file)
            throw "Unable to open file.";
        file << *this << "\n";
        file.close();
    }
};

// Load previous bills
void loadPreviousBills(const char* filename) {
    ifstream file(filename);
    if (!file) {
        cout << "No previous bills found.\n";
        return;
    }
    cout << "📜 Previous Bills:\n";
    char line[200];
    while (file.getline(line, 200)) {
        cout << line << "\n";
    }
    file.close();
}

// Main Function
int main() {
    try {
        loadPreviousBills("bills.txt");

        // Sample items
        Item laptop(101, "Laptop", 75000, 5);
        Item mouse(102, "Mouse", 500, 20);
        Item keyboard(103, "Keyboard", 1500, 10);

        // Create bill
        Bill bill1(1, "Ravi Kumar");

        // Add items
        bill1 + make_pair(&laptop, 1);
        bill1 + make_pair(&mouse, 2);

        // Display and save
        cout << bill1;
        bill1.saveToFile("bills.txt");

    } catch (const char* msg) {
        cerr << "Error: " << msg << "\n";
    }

    return 0;
}
