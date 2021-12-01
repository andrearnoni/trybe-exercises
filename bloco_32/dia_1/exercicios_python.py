# Exercício 1


def biggest_number(num_one, num_two):
    if num_one > num_two:
        print(num_one)
    else:
        print(num_two)


biggest_number(15, 1)


# Exercício 2


def calc_media(media_list):
    soma = 0
    for i in media_list:
        soma += i
        media = soma / len(media_list)
    print(media)


calc_media([15, 10, 80, 50, 40])


# Exercício 3


def print_square(size):
    for i in range(size):
        print("*" * size)


print_square(5)


# Exercício 4

def get_biggest_name(names):
    biggest_name = names[0]
    for i in names:
        if len(i) > len(biggest_name):
            biggest_name = i
    print(biggest_name)


get_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
