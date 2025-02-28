def compareStrings(firstString, secondString, thirdString):
    my_words = [firstString, secondString, thirdString]
    my_words = sorted(my_words)
    print(my_words)
    return "".join(my_words)

print(compareStrings("ab", "aa", "ac"))