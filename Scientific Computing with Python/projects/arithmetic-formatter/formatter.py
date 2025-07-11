def arithmetic_arranger(problems, *args):

    if len(problems) > 5:
        return "Error: Too many problems."

    parsed_problems = []
    for problem in problems:
        parsed_problems.append(problem.split())

    operands = []
    operators = []
    for pb in parsed_problems:
        operands.append(pb[0])
        operands.append(pb[2])
        operators.append(pb[1])

    for operand in operands:
        if not (operand.isdigit()):
            return "Error: Numbers must only contain digits."
        elif len(operand) > 4:
            return "Error: Numbers cannot be more than four digits."

    for operator in operators:
        if operator not in ["+", "-"]:
            return "Error: Operator must be '+' or '-'."

    arranged_problems = ""
    dash_row = ""
    first_operand_row = ""
    second_operand_row = ""
    solutions = ""

    for pb in parsed_problems:
        max_length = max(len(pb[0]), len(pb[2]))

        first_operand_row += f"{pb[0].rjust(max_length+2)}    "
        second_operand_row += f"{pb[1]} {pb[2].rjust(max_length)}    "
        dash_row += f"--{'-' * (max_length)}    "
        if pb[1] == "+":
            solutions += f"{str(int(pb[0]) + int(pb[2])).rjust(max_length + 2)}    "
        else:
            solutions += f"{str(int(pb[0]) - int(pb[2])).rjust(max_length +2)}    "

    first_operand_row = first_operand_row.rstrip()
    second_operand_row = second_operand_row.rstrip()
    dash_row = dash_row.rstrip()
    solutions = solutions.rstrip()

    if args:
        arranged_problems += (
            first_operand_row
            + "\n"
            + second_operand_row
            + "\n"
            + dash_row
            + "\n"
            + solutions
        )
    else:
        arranged_problems += (
            first_operand_row + "\n" + second_operand_row + "\n" + dash_row
        )

    arranged_problems = arranged_problems.rstrip("\n")
    return arranged_problems


print(arithmetic_arranger(["3801 - 2", "123 + 49"]))
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print(arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]))
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print(
    arithmetic_arranger(
        ["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True
    )
)
