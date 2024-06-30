#Write a program to print the given number is odd or even.
def eveen(EO):
    if EO%2==0:
        print(EO,"even")
    else:
        print(EO,"odd")
eveen(24)
eveen(75)
#Write a program to find the given number is positive or negative.
def positive(posit):
    if posit>0:
        print(posit,"positive")
    elif posit==0:
        print(posit,"zero")
    else:
        print(posit,"negative")
positive(100)
positive(0)
positive(-48799338)
#Write a program to find the sum of two numbers.
sum=lambda a,b:a+b
print(sum(2,5))
#Write a program to find if the given number is prime or not.
def prime(pri):
    flag=False
    for i in range(2,pri):
        if pri%i==0:
            flag=True
            break
    if flag:
        print(pri,"not prime")
    else:
        print(pri,"prime")
prime(2)
prime(4)
#Write a program to check if the given number is palindrome or not.
def palindrome (pali):
    reves=0
    palin=pali
    while pali>0:
       drome=pali%10
       reves=(reves*10)+drome
       pali=pali//10
    if reves==palin:
        print(palin,"palindrome")
    else:
        print(palin,"not palindrome")
palindrome(141)
palindrome(145)
#Write a program to check if the given number is Armstrong or not
def arm(armst):
    strong=armst
    #pow=armst%10
    sum=0
    while(armst>0):
        Cstrong=armst%10
        sum+=Cstrong**3
        armst=armst//10
    if sum==strong:
        print(strong,"armstrong")
    else:
        print(strong,"not")
arm(123)
arm(153)
#Write a program to check if the given strings are anagram or not.
def anagram(s1,s2):
    if sorted(s1)==sorted(s2):
        print(s1,s2,"anagram")
    else:
        print(s1,s2,"not anagram")
anagram("listen","silent")