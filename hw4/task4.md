В данном задании требуется найти свой код, не подходящий под приницпы программирования DRY, KISS, YAGNI и исправить его.

1. NotDRY код:
```Python
def main():
i = input("Enter number: ")
i = int(i)
if i == 0:
print("The number belongs to the interval from 0 to 3")
elif i == 1:
print("The number belongs to the interval from 0 to 3")
elif i == 2:
print("The number belongs to the interval from 0 to 3")
elif i == 3:
print("The number belongs to the interval from 0 to 3")
else:
print("The number does not belong to the interval from 0 to 3")

if __name__ == "__main__":
main()
```
Его исправленная версия:
```Python
def check(i):
for a in range(4):
if a == i:
return True
return False

def main():
i = input("Enter number: ")
i = int(i)
if check(i):
print("The number belongs to the interval from 0 to 2")
else:
print("The number does not belong to the interval from 0 to 2")

if __name__ == "__main__":
main()
```
2. NotYAGNI код:
```Python
'''

def check_prime_number(i):
....

def check(i, n):
for a in range(n):
if a == i:
return True
return False

'''

def check(i):
for a in range(4):
if a == i:
return True
return False

def main():
i = input("Enter number: ")
i = int(i)
if check(i):
print("The number belongs to the interval from 0 to 2")
else:
print("The number does not belong to the interval from 0 to 2")

if __name__ == "__main__":
main()
```
Его исправленная версия:
```Python
def check(i):
for a in range(4):
if a == i:
return True
return False


def main():
i = input("Enter number: ")
i = int(i)
if check(i):
print("The number belongs to the interval from 0 to 2")
else:
print("The number does not belong to the interval from 0 to 2")

if __name__ == "__main__":
main()
```
