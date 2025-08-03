HEARTS = "🩷🧡💛💚🩵💙💜🖤🩶🤍🤎💖💞💓💟💝"

def hex_digits(char):
    dec_val = ord(char)
    hex_val = hex(dec_val)[2:]
    return tuple(hex_val)

def hearts(hex_digits):
    first_heart = HEARTS[int(hex_digits[0], 16)]
    second_heart = HEARTS[int(hex_digits[1], 16)]
    return first_heart + second_heart

def encode(message):
    lovetext = []
    for char in message:
        lovetext.append(hearts(hex_digits(char)))
    return "".join(lovetext)

def decode(message):
    cleartext = []
    for i in range(0, len(message), 2):
        first_heart = message[i]
        second_heart = message[i + 1]

        hex_val = f"{hex(HEARTS.index(first_heart))[2:]}{hex(HEARTS.index(second_heart))[2:]}"
        dec_val = int(hex_val, 16)
        cleartext.append(chr(dec_val))

    return "".join(cleartext)


if __name__ == '__main__':
    lovetext = encode("Hello World, this is Love Language")
    print(lovetext)
    print(decode(lovetext))
