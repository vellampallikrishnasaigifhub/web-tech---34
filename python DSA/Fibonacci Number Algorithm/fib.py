# Finding The nth Fibonacci Number Using Recursion
def fib(n):
    if(n<=1):
        return n
    else:
        return fib(n-1)+fib(n-2)
print(fib(19))
#Implementation Using a For Loop
a=0
b=1
print(a)
print(b)
for i in range(10):
    fib=a+b
    print(fib)
    a=b
    b=fib
#Implementation Using Recursion
print(0)
print(1)
count=2
def fibonacci(d,s):
    global count
    if count<=19:
        fid=d+s
        print(fid)
        d=s
        s=fid
        count+=1
        fibonacci(d,s)
    else:
        return 0
fibonacci(1,0)