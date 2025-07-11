class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return (2 * self.width) + (2 * self.height)

    def get_diagonal(self):
        return ((self.width**2) + (self.height**2)) ** 0.5

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."

        picture = "*" * self.width + "\n"
        picture = picture * self.height
        return picture

    def get_amount_inside(self, obj):
        return self.get_area() // obj.get_area()

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"


class Square(Rectangle):
    def __init__(self, side_length):
        super().__init__(side_length, side_length)

    def set_side(self, side_length):
        self.width = side_length
        self.height = side_length

    def set_width(self, new_value):
        self.width = new_value
        self.height = new_value

    def set_height(self, new_value):
        self.width = new_value
        self.height = new_value

    def __str__(self):
        return f"Square(side={self.width})"


# Testes

rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))

# Retornos esperados

# 50
# 26
# Rectangle(width=10, height=3)
# **********
# **********
# **********

# 81
# 5.656854249492381
# Square(side=4)
# ****
# ****
# ****
# ****

# 8
