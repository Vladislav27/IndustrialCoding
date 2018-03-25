В данном задании требуется найти антипаттерны в своих проектах и исправить их.

1. God - class
```C++
class Field {
private:
    ...
public:
    Field();
    void ReadFromFile(std::string &path);
    void Work();
    void Check();
    void Update();
    void WriteResultFile(std::string &path);
    ...
}
```
Лучше было бы разделить данный класс на несколько, чтобы в будующем можно было бы переиспользовать полученные классы:
```C++
class Field {
private:
    ...
public:
    Field();
    void Work();
    void Check();
    void Update();
    ...
}

class Read {
private:
    ...
public:
    Read();
    void ReadFromFile(std::string &path);
    ...
}

class Print {
private:
    ...
public:
    Print();
    void WriteResultFile(std::string &path);
    ...
}
```
2. Magic numbers
```Python
def create_main_window():
    window = Window(600, 600)
    ...
```
Исправленная версия:
```Python
WINDOW_SIZE = 600

def create_main_window():
    window = Window(WINDOW_SIZE, WINDOW_SIZE)
    ...
```
