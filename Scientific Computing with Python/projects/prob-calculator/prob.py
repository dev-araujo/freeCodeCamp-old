import copy
import random


class Hat:
    def __init__(self, **balls):
        self.contents = []
        for color, quantity in balls.items():
            self.contents.extend([color] * quantity)

    def draw(self, num_drawn):
        num_drawn = min(num_drawn, len(self.contents))
        drawn_balls = random.sample(self.contents, num_drawn)

        return drawn_balls


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successes = 0
    for _ in range(num_experiments):
        balls_matched = 0
        another_hat = copy.deepcopy(hat)
        balls_drawn = another_hat.draw(num_balls_drawn)

        for color, expected_count in expected_balls.items():

            if balls_drawn.count(color) >= expected_count:
                balls_matched += 1

        balls_req = balls_matched

        if balls_req == len(expected_balls):
            successes += 1

    return successes / num_experiments


# Testes
hat = Hat(black=6, red=4, green=3)
probability = experiment(
    hat=hat,
    expected_balls={"red": 2, "green": 1},
    num_balls_drawn=5,
    num_experiments=2000,
)

print(probability)
