text = "This is a secret message"


def caesar(phrase, key=3):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    crypto = ""

    for char in phrase.lower():

        if not char.isalpha():
            crypto += char
        else:
            index = alphabet.find(char)
            new_index = (index + key) % len(alphabet)
            crypto += alphabet[new_index]

    return crypto


def decrypt(phrase):
    return caesar(phrase, -3)


secret_message = caesar(text)
broken_message = decrypt(secret_message)

print(f"Crypto message: {secret_message}")
print(f"Encrypto message: {broken_message}")
