text = "This is a secret message"
key = "python"


def vigenere(phrase, key, direction=1):
    key_index = 0
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    crypto = ""

    for char in phrase.lower():

        if not char.isalpha():
            crypto += char
        else:
            key_char = key[key_index % len(key)]
            key_index += 1

            step = alphabet.index(key_char)
            index = alphabet.find(char)
            new_index = (index + step * direction) % len(alphabet)
            crypto += alphabet[new_index]

    return crypto


def vigenereDecrypt(phrase, key, direction):
    return vigenere(phrase, key, direction)


secret_message = vigenere(text, key)
broken_message = vigenereDecrypt(secret_message, key, -1)

print(f"Crypto message: {secret_message}")
print(f"Encrypto message: {broken_message}")
