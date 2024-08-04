#1.Write a program to print the given number is odd or even.
def eveen(EO):
    if EO%2==0:
        print(EO,"even")
    else:
        print(EO,"odd")
eveen(24)
eveen(75)
#2.Write a program to find the given number is positive or negative.
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
#4.Write a program to find the sum of two numbers.
sum=lambda a,b:a+b
print(sum(2,5))
#5.Write a program to find if the given number is prime or not.
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
#6.Write a program to check if the given number is palindrome or not.
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
#7.Write a program to check if the given number is Armstrong or not
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
#8.Write a program to check if the given strings are anagram or not.
def anagram(s1,s2):
    if sorted(s1)==sorted(s2):
        print(s1,s2,"anagram")
    else:
        print(s1,s2,"not anagram")
anagram("listen","silent")
#9.Write a program to find a factorial of a number.
def factorial(fact):
    factor=1
    for i in range(1,fact+1):
        factor=factor*i
    print(factor)
factorial(3)
#10.Write a program to find a fibonacci of a number.
def fib(nterms):
   n1, n2 = 0, 1
   count = 0
   if nterms <= 0:
      print("Please enter a positive integer")
   elif nterms == 1:
      print("Fibonacci sequence upto",nterms,":")
      print(n1)
   else:
      print("Fibonacci sequence:")
      while count < nterms:
         print(n1)
         nth = n1 + n2
         n1 = n2
         n2 = nth
         count += 1
fib(5)
#11.Write a program to find GCD or HCF of two numbers.
def gcd(a, b):
    if (a == 0):
        return b
    if (b == 0):
        return a
    if (a == b):
        return a
    if (a > b):
        return gcd(a-b, b)
    return gcd(a, b-a)
a = 98
b = 56
if(gcd(a, b)):
    print('GCD of', a, 'and', b, 'is', gcd(a, b))
else:
    print('not found')
#12.Write a program to find LCM of two numbers.
def compute_gcd(x, y):
    while(y):
        x,y=y,x%y
        return x
def compute_lcm(x, y):
    lcm=(x*y)//compute_gcd(x, y)
    return lcm
num1 = 54
num2 = 24 
print("The L.C.M. is", compute_lcm(num1, num2))
#13.Write a program to print the following pattern.
'''
#
# #
# # #'''
def pattern(n):
    for i in range(n):
        for j in range(i):
            print("#",end="")
        print()
pattern(5)
#14.Write a program to print the following pattern.
'''
1
1 2
1 2 3
'''
def num(n):
    num=1
    for i in range(n):
        num=1
        for j in range(i+1):
            print(num,end="")
            num+=1
        print()
num(6)
#15.Write a program to print the following pattern.
'''
A
A B
A B C
'''
def alphapat(n):
    num=65
    for i in range(n):
        num=65
        for j in range(i+1):
            ch=chr(num)
            print(ch,end="")
            num+=1
        print()
alphapat(6)
#16.Write a program to print the following pattern.
'''
A
BC
DEF
GHIJ
KLMNO
PQRSTU
'''
def alphapat(n):
    num=65
    for i in range(n):
        for j in range(i+1):
            ch=chr(num)
            print(ch,end="")
            num+=1
        print()
alphapat(6)
#17.Write a program to print the following pattern.
'''
1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15
16 17 18 19 20 21
'''
def nums(n):
    num=1
    for i in range(n):
        for j in range(i+1):
            print(num,end=" ")
            num+=1
        print()
nums(6)