class Category:
    def __init__(self, category):
        self.ledger = []
        self.category = category
        self.total = 0

    def deposit(self, amount, desc=""):
        deposit_desc = {"amount": amount, "description": desc}
        self.total += amount
        self.ledger.append(deposit_desc)

    def withdraw(self, amount, desc=""):
        if self.check_funds(amount):
            negative_amount = -1 * amount
            deposit_desc = {"amount": negative_amount, "description": desc}
            self.total -= amount
            self.ledger.append(deposit_desc)
            return True
        else:
            return False

    def transfer(self, amount, dest_category):
        if self.check_funds(amount):
            withdraw_desc = f"Transfer to {dest_category.category}"
            deposit_desc = f"Transfer from {self.category}"

            if self.withdraw(amount, withdraw_desc):
                dest_category.deposit(amount, deposit_desc)
                return True

        return False

    def check_funds(self, amount):
        return self.total >= amount

    def get_balance(self):
        balance = 0
        for transaction in self.ledger:
            balance += transaction["amount"]
        return balance

    def __str__(self):
        title = f"{self.category.center(30, '*')}\n"
        items = ""
        for transaction in self.ledger:
            description = transaction["description"][:23]
            amount = "{:.2f}".format(transaction["amount"]).rjust(30 - len(description))
            items += f"{description}{amount}\n"
        total = f"Total: {self.total:.2f}"
        return title + items + total


def create_spend_chart(categories) -> str:

    total_spent_per_category = []

    for category in categories:
        negative_amounts = 0
        for item in category.ledger:
            if item["amount"] < 0:
                negative_amounts += abs(item["amount"])
        total_spent_per_category.append(negative_amounts)

    total_spend = sum(total_spent_per_category)

    percent_spent_per_category = [
        ((item / total_spend) * 100) for item in total_spent_per_category
    ]

    chart = "Percentage spent by category"

    for row in range(100, -10, -10):
        chart += "\n" + str(row).rjust(3) + "|"

        for percent in percent_spent_per_category:
            if percent > row:
                chart += " o "
            else:
                chart += "   "
        chart += " "
    chart += "\n    ----------"

    category_name_lengths = []

    for category in categories:
        category_name_lengths.append(len(category.category))

    max_category_name_length = max(category_name_lengths)

    for row in range(max_category_name_length):
        chart += "\n    "

        for column in range(len(categories)):
            if row < category_name_lengths[column]:
                chart += " " + categories[column].category[row] + " "

            else:
                chart += "   "
        chart += " "
    return chart


food = Category("Food")
food.deposit(1000, "deposit")
food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")  # 954,33

clothing = Category("Clothing")
clothing.deposit(200, "deposit")
clothing.withdraw(25.55, "pants, shirt")  # 174,45

auto = Category("Auto")
auto.deposit(500, "deposit")
auto.withdraw(100, "gas, oil, repairs")  # 400

categories = [food, clothing, auto]
print(create_spend_chart(categories))
