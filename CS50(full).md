<!-- *CS50* -->

Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.

A module interface expresses the elements that are provided and required by the module. The elements defined in the interface are detectable by other modules. The implementation contains the working code that corresponds to the elements declared in the interface. Modular programming is closely related to structured programming and object-oriented programming, all having the same goal of facilitating construction of large software programs and systems by decomposition into smaller pieces, and all originating around the 1960s. While the historical usage of these terms has been inconsistent, "modular programming" now refers to high-level decomposition of the code of an entire program into pieces: structured programming to the low-level code use of structured control flow, and object-oriented programming to the data use of objects, a kind of data structure.

- Types of programming: 
In object-oriented programming, the use of interfaces as an architectural pattern to construct modules is known as interface-based programming[citation needed].

- Indentation : is typesetting.

- Indent styles, the way you type your code : K&R,OTBS, Allman Style
Examples :

a. K&R :
if (x)
    a();
else{
    b();
    c();
}

b. OTBS or 1TBS :
if (x) {
    a();
} else {
    b();
    c();
}

c. Allman Style :
if (x)
{
    a();
}
else
{
    b();
    c();
}
** Interpreted vs Compiled :

Depending on the programming language you're using, it will either be a compiled language or an interpreted language. Compiled programs will first be converted to machine code and then you will be able to run the program.
Interpreted languages will be interpreted and converted to machine code at run time.

- A compiled language is a programming language whose implementations are typically compilers (translators that generate machine code from source code), and not interpreters
(step-by-step executors of source code, where no pre-runtime translation takes place).

- An interpreted language is a type of programming language for which most of its implementations execute instructions directly and freely, without previously compiling a program into machine-language instructions. The interpreter executes the program directly, translating each statement into a sequence of one or more subroutines,
 and then into another language (often machine code).
 
//----------------------------------------------------------------------------------------------------------------------------------------
- The string that comes after a . before a file name is called file extension.

- Abstraction : is a term to take some low level implementation details to a higher level of understanding(from 0 to 1) to (letters, decimals, etc).

 how to understand or interpret the binary system on a language for humans.

 - ASCII ==> IS MAPPING FROM NUMBERS TO LETTERS. In 8 bits you can only represent 256 characters.

 - Unicode ==> Unicode is a digital code for computers that lets them show text in different languages.
 Unicode standards are promoted by the Unicode Consortium and based on ISO standards.Their goal is to
 replace current and previous character encoding standards with a single worldwide standard for
 all languages.
 There are almost 100,000 characters in the latest definition of Unicode.

Types of Unicode:

UTF-7 Uses 7 bits per character; relatively unpopular; officially not part of Unicode
UTF-8 Uses 8 bits per character; a variable-width encoding that keeps compatibility with ASCII; the most common characters can be coded in 2 bytes
UTF-16 Uses 16 bits per character; also variable-width encoding
UTF-32 Uses 32 bits per character; a fixed width encoding

** ASCII, abbreviated from American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices.

 - bit(binary digit)

 A bit (short for binary digit) is the smallest unit of data in a computer.
 A bit has a single binary value, either 0 or 1.
 Although computers usually provide instructions that can test and manipulate bits, they generally are designed to store data and execute instructions
 in bit multiples called bytes. In most computer systems, there are eight bits in a byte. The value of a bit is usually stored as either above or below a designated level of electrical charge in a single capacitor within a memory device.
 Half a byte (four bits) is called a nibble. In some systems, the term octet is used for an eight-bit unit instead of byte. In many systems, four eight-bit bytes or octets form a 32-bit word. In such systems, instruction lengths are sometimes expressed as full-word (32 bits in length) or half-word (16 bits in length).
 In telecommunication, the bit rate is the number of bits that are transmitted in a given time period, usually a second.

 - byte is 8 bits.(1 bit is either 0 or 1).

 - RGB(RED GREEN BLUE) : is used to represent a pixel on the screen, 3 bytes(each color has 1 byte assign so that means that it has 256 posible combinations each.)

 - Algorithm

 Step by step to solve a problem.

 - Computational complexity

 time to solve vs size of problem

 graphic



    n --- n/2 -------------- log n


- Pseudocode

instruction in a understandable language for humans(steps)

in the instructions you will find:

booleans questions (true or false)

go backs == loops

- Threads

In computer architecture, multithreading is the ability of a central processing unit (CPU)
(or a single core in a multi-core processor) to execute multiple processes or threads concurrently,
supported by the operating system.

**WEEK 1**

- C

Examples of c language :

1. Print "Hello, world"

#include <stdio.h> # include means have stdio functionality # stdio => standard input and output(its a library)

 int main(void)     # call the function main
 {
        printf("Hello, world\n"); # \n => make another line.(hit enter basically)
 }

2. Infinite loop

while(true) #
{
printf("Hello, world\n");
}

3. Making a loop with a counter

# int == integer,  initialize variable i on 0 # in c you have to declare what
type of variable you create.
# i++ == sums i, the ++ means add 1

for (int i = 0; i < 50; i++)
{
printf("Hello, world\n");
}

4. if

if (x < y)
{
printf("x is less than y\n");

}

else if (x > y)
{
printf("x is greater than y\n");

}

else
{
printf("x is equal to y\n");

}

- Source code (the one humans write) => and we convert to machine code(binary) using a compiler.

A compiler is computer software that transforms computer code written in one programming language into another programming language. Compilers are a type of translator that support digital devices, primarily computers

1. Compiler for C == clang, use it in a cle with commands.

Example :

~$ clang (name of the file) => gives you a compiled file with a random name.

~$ clang -o (name you want) and (name of the file) => gives you the compiled file with the assign name.

~$ .\(name of compiled file) => runs the machine code. # . means here and \ separates the file.

~$ ls => list all the files in the current folder.
-when the files are in green and with a star on it, means that they are executable.
-when the file are in blue and has a / on it means its a folder.

~$ cd => change directory.

~$ cd .. => go back into your parent directory.

~$ rmdir (name of folder) => removes the folder.

- Functions

A function is some instructions that would take an input and would return and output.

- gets_

Function to get an input.

Example :

#include <stdio.h>

int main(void)

{

string s = get_string("name: "); # assigned a string called s with the asked input
printf("hello, %s\n, s"); # print hello with the string s // %s or %i or %f etc are placeholders.

}

Note : In C you need to be precise on what type of data you are storing.

- Library

Is a collection of Functions.(#include <stdio.h> => .h means header file, includes library header.)

Examples :

// Integer aritmethic

#include <cs50.h>
#include <stdio.h>

int main(void)

{
// prompt user for x

int x = get_int("x: ");

// prompt user for y

int y = get_int("y: ");

// perform aritmethic

printf("%i plus %i is %i\n", x, y, x + y);   // gives the output and %i represents integer, then you specify the parameters.
printf("%i minus %i is %i\n", x, y, x - y);
printf("%i times %i is %i\n", x, y, x * y);
printf("%i divided by %i is %i\n", x, y, x / y);
printf("remainder of %i divided by %i is %i\n", x, y, x % y);



}

// ========================================================================================================

#include <cs50.h> // has the function of get_
#include <stdio.h>

int main(void)

 {
     // prompt user for x
     float x = get_float("x: ");

     // prompt user for y
     float y = get_float("y: ");

     // division
     printf("%f divided by %f is %f\n", x, y, x / y); // in the %f you can set the number of decimals you want. Just set the number after the %.

 }

  Investigate switch function in C.

 //=========================================================================================================

 Creating functions in C








 //==========================================================================================================
 ** CLI (Command line interface)

- ls => list, to see the current files of the directory you are.(color blue: folders, color green .exe).

- cd => change directory, change your current directory to <directory> shorthand name for current directory
is . , the one for parent directory ..     If i want to go to my parent directory right away just type cd or
cd and the name of directory.

- pwd => present working directory, will print the name of the current directory.

- ctrl + l => clears the screen

- mkdir <name> => to create a subdirectory inside the directory you are. mkdir and the name you want.

- cp <source> <new name> => copy <source name> <destination name> in the directory you are working ,
this command will allow you to create a duplicate file of the one you type for <source> into the <destination>
one. If you wish to copy an entire directories you add "-r"("recursive"). cp -r <source directory>
<destination directory>.

- rm <file> => remove a file, it will confirm the action with y/n, if you want to skip this type rm -f(forcible)<file>.
Entire directories is rm -r <directory>, you combine rm -r with -rf like rm -rf to skip the confirm action.

- mv <source> <destination> => moves, allows you to rename a file moving it from <source> to <destination>.

//======== TO INVESTIGATE ==================

- chmod

- rmdir

- sudo

- ln

- man

- clear

- touch

- diff

- telnet

//============================================================================================================================

                                   ** Data types - Variables **

 Modern programming languages doesnt use that anymore, if you work with an integer or string, char does not
 need to be specified. In older languages like C you need to specify the type of data variable you are going
 to use.

 ** You can use the sizeof function to know the size in bytes of that data type.

 Example :

 int a = sizeof(int);
 printf("%d bytes", a);

 1. Int ://signed
 is used for variables that will store integers. Integers always takes up 4 bytes(1 bytes == 8 bits)
 of memory(32 bits), This means that the range of values they can store is necessarily limited to 32 bits
 worth of information.

 Integer Range

 -2^31-------------------------------------------0-----------------------------------------------2^31-1(minus one because we need a spot for 0)

 negative integers                              half                                     positive integers

 basically you can have have negative integers and half positive integers in 32 bits(limited)
 thats roughly negative 2 billion to positive 2 billion.

 thats what we can fit in an integer variable.

 ** unsigned <you can use it in some data types> its a qualifier if you know your value will never be negative.
 which effectively doubles the positive range of variables of that type, at the cost of disallowing any negative
 values.

 unsigned range

 0-------------------------------------------------------------------------------------------2^32-1

 Note : investigate other qualifiers.(There are more!!)

 ** long long is another variable that use 8 bytes(64 bits) for numbers larger than the int range.

  -2^63-------------------------------------------0-----------------------------------------------2^63-1(minus one because we need a spot for 0)//signed

  -0-------------------------------------------------------------------------------------------2^64-1 //unsigned

 - Two's complement: 
 Two's complement is a mathematical operation on binary numbers, and is an example of a radix complement. It is used in computing as a method of signed number representation.

 Two's complement is the most common method of representing signed integers on computers,[1] and more generally, fixed point binary values. In this scheme, if the binary number 0102 encodes the signed integer 210, then its two's complement, 1102, encodes the inverse: −210. In other words, to reverse the sign of any integer in this scheme, you can take the two's complement of its binary representation.[2] The tables at right illustrate this property.

 2. Char : is a data type used for variables that will store single characters. Char always take 1 byte of
 of memory(8 bits) This means that the range of values they can store is necessarily limited to 8 bits worth
 of information.

 Thanks to ASCII we developed a mapping of characters like A,B,C,etc... to numeric values in the positive side
 of this range.

 char range

 -128--------------------------------------------0---------------------------------------------------127


 3. Float : is a data type used for variables that will store floating point values(fractional numbers),
 also known as real numbers. Floating points values always takes 4 bytes of memory(32 bits of memory).

 Its complicated to explain the float range, but suffice to say is 32 bits of memory, some of might be use
 for an integer part.

 4. doubles : The double data type is used for variables that will storage floating-point values,
 also know real numbers, the difference is that doubles are double precision they always take up
 to 8 bytes of memory(64 bits)

 with an additional 32 bits of memory relative to a float, doubles allow us to specify much more
 precise numbers.

 5. void: IS A TYPE BUT NOT DATA. Functions can have a void type returned, which just means they dont return
 a value. The parameter list of a function can also be void, it means the function doesnt take any parameters

 thing of void as a placeholder for nothing.

 //===============OTHER TYPES===============INCLUDED IN CS50 LIBRARY========

 1. bool : the bool data type is used for variables that will store a boolean value. More precisely
 True or False only capable of storing two values.

 Always remember to use #include for libraries.

 2. string : the string data type is used for variables that will store a series of char, usually called string
 because is a series of characters.
 strings usually include things such as words, sentences, paragraphs.

 //=================OPERATORS================================================

 1. arithmetic operators :

 add(+), substract(-), multiply(*), divided (/) and modulo(%)=> remainder

 you can abbreviate with +=, -=, *= and /=

 shorthand also with

 x++; // incrementing 1
 x--; // decrementing 1

 2. Boolean expressions :

 true or false

 in c, every nonzero expression is true and zero is false.

 Two main types :

 a) Logical Operators :

 - logical AND(&&) IS ONLY TRUE if all the operands are true,

 x = true y = true == TRUE
 x = true y = false == FALSE
 x = false y = true == FALSE
 x = false y = false == FALSE

 - logical OR(||) IS TRUE IF AND ONLY at least one operand is true.

 x = true y = true == TRUE
 x = true y = false == TRUE
 x = false y = true == TRUE
 x = false y = false == FALSE

 - logical NOT(!) INVERTS THE VALUE of its operand.

 x = true !x = false
 x = false !x = true



 b) relational operators :

 These behave as you would expect them to,

 - Less than (x < y)
 - Less than or equal to (x <= y)
 - Greater than (x > y)
 - Greater than or equal to (x >= y)

 C can also test two operators for equality and inequality

 ( x == y); // equal
 ( x != y); // not equal

 DO NOT GET CONFUSED WITH ASSIGN(=) AND EQUALITY(==)

 //============================Conditional statements============================================

 Conditional expressions allow your programs to make decisions and take differents forks on the road, depending
 on the values of variables or user input.

 C provides a few different ways to implement conditional expressions (also known as branches) in your programs.

 1. If (boolean expression)
 {

 }

 if boolean expression is TRUE all the lines of code inside the curly brackets will run through otherwise
 will not run.

 If (boolean expression)
 {

 }
 else
 {

 }

 if boolean expression is true all the lines in the if brackets will execute otherwise else will execute.

 2. In C you can create a chain of ELSE IF :

 if (boolean expression)
 {
   // first branch
 }
 else if (boolean expression)
 {
   // second branch
 }
 else if (boolean expression)
 {
   // third branch
 }
 // As many you need

 else
 {

 }

 3. It is also possible to create a chain of non-mutually exclusive branches :

 if (boolean expression)
 {
   // first branch
 }
 if (boolean expression)
 {
   // second branch
 }
 if (boolean expression)
 {
   // third branch
 }
 else
 {
   // fourth branch
 }
 * Here only the third and fourth branches are exclusive, the else binds to the nearest if.

 4. C switch() is a conditional statement that permits enumeration of discrete cases, instead of relying
 on boolean expressions.

 it is important to break; beetwen each case or you will "fall through" each case(unless that is a desired behavior)

 The expression used in switch must be integral type (int, char and enumerables). Any other
 type is not allowed.

 int x = get_int() // cs50 library function  // user input
 switch (x) // depending on the input beetwen 1 to 3 printf or else sorry
 {
   case 1:
   printf("One!\n");
   break; // need to stop the lines from going forward

   case 2:
   printf("Two!\n");
   break;

   case 3:
   printf("three!\n");

   default:
   printf("sorry\n");


 }

 5. The ternary operator(?:) is useful for writing trivially short conditional branches, these two snippets of
 code act identically.

   Example:

   int x;
   if (boolean expression)
   {
     x = 5;

   }                  //  int x = (boolean expression) ? 5 : 6; a way to replace the if and else
                     // if (boolean expression is true) ? means give 5 to the int x after the :
                    // is what the value woud be.
   else
   {
     x = 6;
   }

//========================================LOOPS================================================================

loops allow your programs to execute lines of code repeatedly.

 1. while(true) // infinite loop
    {
      // the code will execute for ever until we break or kill the program
    }

 2. while(boolean expression)
  {
    // if the boolean evaluates to true it will run the code inside the c.brackets until the boolean
    // evaluates to false
  }

 3. do // this will execute the lines of code(at least once) under do and then run the loop until the boolean is false.
  {

  }
  while(boolean expression); // if is true goes back to do until is false.

 4. for ( int i = 0; i < 10; i++ ) // check and practice the ; between statements
   {

   }
  for loop are used to repeat the body of a loop certain number of times, in this example 10 times.
  the process for a loop is :
  a)  The counter variable (in this example i) // we declare the variable
  b)  The boolean expression is checked
  c)  If it evaluates to true, the body of the loop executes
  d)  If it evaluates to false, the body wont execute
  e)  The counter variable is incremented and then it evaluates again until the boolean is false

  SO THE USES ARE :

  - While : Use when you want to repeat a line of code an unknown numbers of times and posibly not at all.
  - Do-While : Use when you want to repeat a line of code an unknown numbers of times and at least one time.
  - For : Use when you want to repeat a line of code a discrete number of times though you wont know the number
  at the moment the program is compiled.

  Note : you can exchange them.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

The four principles of OOP.
Dimistifying Object Oriented Programming is not easy at first, but re-read this article a few times and you’ll rank up. I’m going to give you some insight into the four principles of Object Oriented Programming:

1. Encapsulation:
Encapsulation means that the internal representation of an object is generally hidden from view outside of the object’s definition. Typically, only the object’s own methods can directly inspect or manipulate its fields.

Encapsulation is the hiding of data implementation by restricting access to accessors and mutators.

An accessor is a method that is used to ask an object about itself. In OOP, these are usually in the form of properties, which have a get method, which is an accessor method. However, accessor methods are not restricted to properties and can be any public method that gives information about the state of the object.

A Mutator is public method that is used to modify the state of an object, while hiding the implementation of exactly how the data gets modified. It’s the set method that lets the caller modify the member data behind the scenes.

Hiding the internals of the object protects its integrity by preventing users from setting the internal data of the component into an invalid or inconsistent state. This type of data protection and implementation protection is called Encapsulation.

A benefit of encapsulation is that it can reduce system complexity.

2. Abstraction
Data abstraction and encapuslation are closely tied together, because a simple definition of data abstraction is the development of classes, objects, types in terms of their interfaces and functionality, instead of their implementation details. Abstraction denotes a model, a view, or some other focused representation for an actual item.

“An abstraction denotes the essential characteristics of an object that distinguish it from all other kinds of object and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer.” — G. Booch

In short, data abstraction is nothing more than the implementation of an object that contains the same essential properties and actions we can find in the original object we are representing.

3. Inheritance
Inheritance is a way to reuse code of existing objects, or to establish a subtype from an existing object, or both, depending upon programming language support. In classical inheritance where objects are defined by classes, classes can inherit attributes and behavior from pre-existing classes called base classes, superclasses, parent classes or ancestor classes. The resulting classes are known as derived classes, subclasses or child classes. The relationships of classes through inheritance gives rise to a hierarchy.

Subclasses and Superclasses A subclass is a modular, derivative class that inherits one or more properties from another class (called the superclass). The properties commonly include class data variables, properties, and methods or functions. The superclass establishes a common interface and foundational functionality, which specialized subclasses can inherit, modify, and supplement. The software inherited by a subclass is considered reused in the subclass. In some cases, a subclass may customize or redefine a method inherited from the superclass. A superclass method which can be redefined in this way is called a virtual method.

4. Polymorphism
Polymorphism means one name, many forms. Polymorphism manifests itself by having multiple methods all with the same name, but slightly different functionality.

There are 2 basic types of polymorphism. Overridding, also called run-time polymorphism. For method overloading, the compiler determines which method will be executed, and this decision is made when the code gets compiled. Overloading, which is referred to as compile-time polymorphism. Method will be used for method overriding is determined at runtime based on the dynamic type of an object.

If you can grasp these four principles, OOP can be much of a breeze for you. It might take more than one read, I encourage you to practically try it.

Challenge:
Remember our car object from my previous post? See if you can make a class Ford that inherits from the car class. Try to find out which key world you use to inherit.

Yup that’s the code calling to you!
//=====================================================================================================

Compiler :

For C is clang(C language) A compiler makes source code into machine code.

./ => is saying run an exe, like clicking a program in a gui.

When you compile your program you need to link it to external libraries that you may have for functions,
example cs50.

Example :

$ clang hello.c -lcs50 (-l) links that library

*Compilation in detail*

Compiling : processes

a) Preprocessing: Anytime there is a line of code that starts with $ or # that means is a special command
with the contents of the file, it means replace that with that code.(In the file). (Functions shall exist)

b) Compiling: Taking the source code and converting it to assembly code.(assembly language).(low level)

c) Assembling: Takes the assembly code and converted to machine code(binary code).

d) Linking: Is linking the binary code - merge with the standard io (library with functions). Example contains
printf.

*Note*
You can use a function that is in the cs50 library (eprintf) to help you make markers of where is your
program at the moment, like doing printf("This is were your program is at the moment").eprintf does that.

*DEBUGGER*

A program that helps you remove bugs.

Is use to remove bugs from your code, so the source code can be compiled.

In cs50 :
- Help50: Is a virtual teacher, checks your code for any syntax mistake.
- eprintf : You can use a function that is in the cs50 library (eprintf) to help you make markers of where
is your program at the moment, like doing printf("This is were your program is at the moment").
eprintf does that.
- debbuger50 : is based on GDB: the gnu debugger that runs on many Unix-like systems and works for
many programming languages.(Was written in C)
The main concept is that you have a breaking point to stop the program and start analizing the code.
//======================================DATA TYPES================================================

*Strings*

Is a sequence of characters.

they have indexes and all attributes like length. In cs50 library we have the function strlen that
gives you that.

*Typecasting*

- ASCII : American standarized Code for Information Interchange.

Type casting: is a way to convert a variable from one data type to another data type. For example,
if you want to store a long value into a simple integer then you can typecast long to int.
You can convert values from one type to another explicitly using the cast operator.

There are two types:

a. Implicit conversion: Implicit conversions do not require any operator for converted.
They are automatically performed when a value is copied to a compatible type in the program.

Example :

#include<stdio.h>
#include<conio.h>

void main()
{
 	 int i=20;
 	 double p;
 	 clrscr();

 	 p=i; // implicit conversion int to double.

	 printf(“implicit value is %d”,p);

	 getch();
}

Output:-
implicit value is 20.


b. Explicit conversion

In C language, Many conversions, especially those that imply a different interpretation of the value,
require an explicit conversion. We have already seen two notations for explicit type conversion.

They are not automatically performed when a value is copied to a compatible type in the program.

Example:

#include<stdio.h>
#include<conio.h>

void main()
{
 	   int i=20;
 	   short p;
 	   clrscr();

 	   p = (short) i; // Explicit conversion(typecasting)

	   printf(“Explicit value is %d”,p);

	   getch();
}


//====================


Example :

#include <stdio.h>


int main(void)
{
    string s = get_string("Name: ");

    for (int i = 0; i < strlen(s); i++)
    {
        printf("%c %i\n", s[i], (int) s[i]); // converting a char(letter) => into an int is going to give back the ascii code.
    }

}

*Capitalize ASCII*

There is a difference of 32 mathematically between A = 65 and a = 97. (reference the ascii code table)

*Data types in C

-bool
-char
-double
-float
-int
-long
-long long
-string

//=========================================DATA STRUCTURES========================================

*Arrays*

Store multiple objects in memory, a continous chunk of memory.

Example :

Int main(void) means that your main program will be returning an int. Can take input. Void means that
it doesnt take input by default.
if you want to run the program without the ./ just hit enter

Example :
int main(int argc, string argv[]) => means take int and string.Takes two inputs // argv means argument vector.
// prints a command line argument.
// argc means argument count.
// Printing a command-line argument

#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[]) // the function and (arguments) like a # a def in ruby.
{
    if (argc == 2) // means two words like the name of the exe and another word
    {
        printf("hello, %s\n", argv[1]); // the 2 position of the index(Argument) always indeces start at 0
    }
    else
    {
        printf("hello, world\n");
    }
}

Means that in the terminal when you are typing ./and the name of the program you can just add the argument

Example:

Hello, and a Input name

./name program and the name you want

output => hello, and the name

*Segmentation fault*

When you touch a chunk of memory that was not used. Can Crash a process.

*Cryptography*

Use to scramble information(Encode information). convert in another format cypher format at the end
will get to normal text

Inputs => Plain text and Key(to open the text)  => Outputs => ciphertext

//=================================================================================================
*Functions*

Sometimes also known as procedures, methods or subroutines.

What is a function?
A black box with a set of 0+ inputs and 1 output.

Example :

 A   B    C            3   6   7         4      5
 |   |    |            |   |   |         |      |
func(a,b,c)    =>     add(a,b,c)    =>  mult(a,b)
     |                     |                 |
     Z                     16                20

-why Call it a black box?
If we arent writing the functions ourselves, we dont need to know the underlying implementation.

Example :

mult(a,b) // If you need the function you call it but you dont need to see what is inside.
   set counter to 0
   repeat b times
     add a counter
   output counter

Thats part of the contract of using functions. The behavior is Typically predictable base on the name.
Thats why must functions have clear, obvius(ish) names, and are well documented.

-Why use functions?
Organization, functions help break up a complicated problem into a more manageable subparts.

Simplification, smaller components tend to be easier to design, implement and debug.

Reusability, functions can be recycled; you only need to write them once, but can use them as often
as you need!

-Function declarations
1. Declare it. This gives the compiler a heads-up that a user-written function appears in the code.

2. Function declarations should always go atop your code, before you begin writing main().

3. There is a standard form that every function declaration follows.

Syntax:

<return-type> <name>(argument-list);

a. Return-type is what kind of variable the function will output.
b. The name is what you want to call your function.
c. The argument-list is the comma-separated set of inputs to your function, each of which has a type
and a name.

Example:

1.int add_two_ints(int a, int b);

a. The sum of two integers is going to be an integer as well.
b. Given what this function does, make sure to give it an appropiate name.
c. There are two inputs to this function, and we need to give a name to each of them for purposes of the
function. Theres nothing important about these inputs as far as we known, so given them simple names
is okay.

2.float mult_two_reals(float x, float y);

-A function definition looks ALMOST identical to a function declaration, with a small change:

a.float mult_two_reals(float x, float y); // declaration of function

b.float mult_two_reals(float x, float y) // funtion definition
  {
    float product = x * y;
    return product;
  }

Example :

a.int add_two_ints(int a, int b);

b. int add_two_ints(int a, int b)
{
  int sum; // declare variable
  sum = a + b; // calculate the sum
  return sum; // give result back
}

-Function Calls

Now that you created a function, time to use it!

To call a fucntion, simply pass it appropiate arguments and assign its return value to something of
the correct type

Example:

// includes
#include <cs50.h>
#include <stdio.h>

// declare function
int add_two_ints(int a, int b);

int main(void)
{
    // ask user for input
    int x = get_int("Give me an integer: ");
    int y = get_int("Give me another integer: ");

    // add the two numbers together via function call
    int z = add_two_ints(x,y);

    // output the result
    printf("the sum of %i and %i is %i!\n", x, y, z);
}

// Function definition(inside the black box)
int add_two_ints(int a, int b)
{
    int sum = a + b;
    return sum;
}

-Function miscellany

a. Recall that sometimes functions take no inputs. In that case, we declare the function as having
a void argument list.

Example :

int main(void)

b. Recall also that functions sometimes do not have an output. In that case, we declare the function
as having a void return type.

//===================================================================================================

*Variable Scope*

Scope is a characteristic of a variable that defines from which functions that variable may be accesed.

1. Local variable : Can only be accessed within the functions in which they are created.

2. Global Variable : Can be accessed by any function in the program.

Examples :

1. Local variable:

int main(void)
{
    int result = triple(5);
}

int triple(int x)
{
    return x * 3;
}

Here, x is local to the function triple(). No other function can refer to that variable, not even
main(). result is local to main().

Basically means that a local variable is only useable in the function that is declare and a global
function can be use in any function because is declared outside any function(even main).

-In C local variables are passed by value in function calls.
This means that a variable pass into a function example :

int main (void)

{
int foo = 4;
triple(foo); // Here the variable doesnt change.
}

int triple(int x)
{
  return x *= 3;
}

Example 2:

int main(void)
{
  int foo = 4;
  foo = triple(foo); // Here the variable does change because the values is assigned.
}

int triple(int x)
{
  return x * 3=;
}

//=================================ARRAYS=====================================================

*Arrays*

Is a fundamental data structure, we use arrays to hold values of the same type at contiguous memory
locations.

If an array consist of n elements the first index starts at 0 and the last one ends in n - 1.

C wont stop you from touching memory that is not assigned but you can run your program into a
dreaded Segmentation fault(A segmentation fault occurs when a program attempts to access a memory
location that it is not allowed to access, or attempts to access a memory location in a way that
is not allowed(for example, attempting to write to a read-only location, or to overwrite part of the
operating system))

The \0 character does not mark the "end of the array".
The \0 character marks the end of the string stored in a char array, if (and only if) that char array is intended to store a string.
A char array is just a char array. It stores independent integer values (char is just a small integer type).
A char array does not have to end in \0. \0 has no special meaning in a char array. It is just a zero value.
But sometimes char arrays are used to store strings. A string is a sequence of characters terminated by \0.
So, if you want to use your char array as a string you have to terminate your string with a \0.

- Array declaration:

<datatype> <name> [size]; // type=> what kind of data, name=> how you want to call it, size=> How many elements

Example:

int students_grade[40]; // int type, students grade name and 40 elements.

double menu_prices[8]; // double type, menu prices name and 8 elements.

Note: Be careful with the indeces and memory slots on an array. Keep in mind that the indeces starts
at 0 so if you have an array of [10] elements the last index will be 9.

- Declaration of an Array and Initialization:

When declaring and Initializing an array simultaneously, there is a special syntax that may be used to
fill up the array with its starting values:

// Instantiation syntax
bool true_table[3] = {false, true, true}; // Here also you can do => bool true_table[ ] = {false, true, true};
                               // Still the compiler will run the array knowing that there is only 3 elements

// individual element syntax
bool true_table[3];
true_table[0] = false;
true_table[1] = true;
true_table[2] = true;

- Array can consist of more than a single dimension. You can have as many size specifiers as you want.

Example:

bool battleship [10][10];

*You can think of these as 10*10 grid of cells, in memory though is just a 100-element-one-dimensional
array.(10 * 10 = 100)

*Multi-dimensional arrays are a great abstraction to help visualize game boards or other complex
representations.

While we can treat individual elements of arrays as variables, we cannot treat entire arrays themselves
as variables. For instance we cant assign one array to another usign the assignment operator.
That is not legal in C. Instead we must use a loop to copy over the elements one at a time.

Example :

int bar[5] = {1,2,3,4,5};
int foo[5];

foo = bar; // this doesnt work, you cant assign values to another array using assignment operator.

*Recall that most variables in C are passed by value in function calls.// int x = 0 if you call This
                                                  // on a function you get a copy of the value to work with.
Arrays do not follow this rules. Rather, they are passed by reference. The callee receives the actual
array, not a copy of it.
// Check more the concept passing by value and passing by reference.

Example :

void set_array(int array[4]);
void set_int(int x);

int main(void)
{
  int a = 10;
  int b[4] = {0,1,2,3};
  set_int(a); // a remains the same because this function is not assigned to a value so the variable doesnt change.
  set_array(b); // here the array change because is not just a copy like a variable, they are passed by reference.
  printf("%d %d\n", a, b[0]); // the values here will be a = 10 and b[0] = 22 // %d is a placeholder for int.
}

void set_array(int array[4])
{
  array[0] = 22;
}

void set_int(int x)
{
  x = 22;
}

*Note :
printf (format specifiers)(placeholders)
%c	character
%d	decimal (integer) number (base 10)// no difference between %d on printf.
%e	exponential floating-point number
%f	floating-point number
%i	integer (base 10)// no difference between %d on printf.
%o	octal number (base 8)
%s	a string of characters
%u	unsigned decimal (integer) number
%x	number in hexadecimal (base 16)
%%	print a percent sign
\%	print a percent sign
%zu size_t, size_t is an unsigned data type defined by several C/C++ standards,
e.g. the C99 ISO/IEC 9899 standard, that is defined in stddef.h .1
It can be further imported by inclusion of stdlib.h as this file internally sub includes stddef.h . This type is used to represent the size of an object.

//==============================================CLI==========================================================

*Command line Arguments*

when we start our programs with:

int main(void) // remember void is not use.
{

}
If we want the user to provide data to our program before it starts running, we need a new form.

- To collect so called command line arguments from the user declare main as:

int main(int argc, string argv[])// argc => argument count , argument vector.
{

}

These two special arguments enable you to know what data the user provided at the command line and How
much data they provided.

a. argc(Argument count) => This integer-type variable will store the number of command-line-arguments
the user typed when the program was executed.(Is going to tell how much the user type)

Example :

CLI:
$ ./greedy                | argc (1)
$ ./greedy 1024 cs50      | argc (3)

b. argv(argument vector(btw vector is another word for an array)) => This array of strings stores, one STRING per element, the actual text // EVERYTHING STORE HERE IS STORE AS A STRING!!
the user typed at the command-line when the program was executed.
The first element of argv is always found at argv[0]. The last element of argv is always found
at argv[argc-1]. In the example above argc(3) less -1 because of the index would be cs50.

Example:

Lets assume the user runs a program called greedy like this:

$ ./greedy 1024 cs50

indeces|| content
-------||--------
argv[0]   "./greedy"
argv[1]    "1024"
argv[2]    "cs50"
argv[3]      ??? (NULL)

//=================================================MAGIC NUMBERS=====================================================================================

*Magic Numbers*

Directly writing constants(occurring continuously over a period of time.) into our code is sometimes referred to as using magic numbers.

Example:
a.Mario exercise, where we capped the piramid to 23 with the conditional do-while. //Note: the standard terminal window height is 24

b.
   card deal_cards(deck name)
   {
     for (int i = 0; i > 52; i++);
     // deal the card
   }

We got a magic number in here, you see what it is?? Do you see the problem  here?? Particulary is this function is one of many in a suites of programs.

b.1

card deal_cards(deck name)
{
  int deck_size = 52;
  for (int i = 0; i > 52; i++);
  // deal the card
}

This fixes one problem but introduces another one, even if globally declared, what if some other function in our suite inadvertenly manipulates deck_size.(trouble)

C provides a PREPROCESSOR DIRECTIVE (also called a macro) for creating SYMBOLIC CONSTANTS:

  #define <name> <replacement>(NO ; AT THE END)

At the time your program is compiled, #define goes through your code and replaces name with replacement.
If #Include is similar to copy/paste, Define is similar to find/replace.

 Example:

 #define pi 3.1416 // or also can be a string or other data type
 #include <stdio.h>

 int pi will change for 3.1416
-----------------------------------

 #define deck_size 52 // you can't change deck_size by manipulating it.

 card deal_cards(deck name)
 {
   //int deck_size = 52; this is obsolete.
   for (int i = 0; i > 52; i++);
   // deal the card
 }

 //==============================================================================================================================================================================

 *Computational complexity*

 - Running time of an algorithm, in order to make use of our Computational resources we need to have the skill to analyze the complexity of Algorithms,
 so we know what resources those algorithms require.

 - Being able to analyze algorithms allow us to have an idea of how well it scales as we throw larger data sets at it.

 - We have the big O and the big Ω, the big O is the worst case scenario and the big Ω is the best case scenario. When we talk about the complexity of an algorithm,
 we talk about the big O(worst case scenario).

 - How we measure the complexity of an algorithm ?  we do this by the data set : is whatever makes sense in the context, for example if we are having strings as data
 we know that the data set is how many strings we are going to handle.(the number of characters of the string). If we are handling files then the data set is the size
 of the files.
 - We can measure an algorithm based on how it handles these inputs, lets call this measure f(n). f(n) precisely is handled by its tendency, which is dictated by its
 highest order term:

 Example : Lets say we have three algorithms.

 n | f(n) = n^3 | f(n) = n^3 + n^2 | f(n) = n^3 - 8n^2 + 20n
 1 |     1      |         2        |          13 // units of resources used  - constant time always takes a single operation to resolve
10 |   1000     |       1100       |         400 //
100|1,000,000,000|  1,001,000,000  |      992,020,000 //
1000|1.0 * 10^18| 1.000001 * 10^18 |   9.99992 * 10^37 //

- Most common complexity classes :
Fastest to slowest:

O(1) = constant time
O(logn) = logarithmic time
O(n) = linear time
O(n log n) = linearithmic time
O(n^2) = quadratic time
O(n^c) = polynomial time
O(c^n) = exponential time
O(!n) = factorial time
O(∞) = infinite time

Examples :

- O(1) Always takes a single operation in the worst case.

int for_you(int array[1000])
{
  return 4;
}

int add_two_nums(int a, int b)
{
  return a + b;
}

- O(n) linear time algorithm, always takes n operations in the worst case.

int array[6] = {1,2,3,4,5,6,7}

when you have an algorithm to search for number seven it has to go n times through the array to find the number(n)

//===============================algorithms, time complexity=================================================
**SORTING ALGORITHMS**

* Selection sort *

- Basically is taking the less value number in the array and swap it with the first element of the array

O(n^2) // you have to go to the whole array n times, check if the number is less and swap so n^2
Ω(n^2) // you have to do the same, there is no way to know if the array is sorted at the beginning.

Pseudocode :
- Repeat until no unsorted element remains:
 1. Search the unsorted part of the data to find the smallest value.
 2. Swap the smallest value with the first element of the unsorted part.

* Bubble sort*

- Basically is pairing numbers and swapping then from lowest to highest.

O(n^2) // you have to look at the elements n^2 times
Ω(n) // the array is sorted so you just have to go n times(each number once) in the array.

Pseudocode :
- Set swap counter to a non zero value.(Because if you started with 0 it wont loop)
- Repeat until the swap counter is 0: // the reason of the above.
 1. Reset swap counter to 0.
 2. Look at each adjacent pair.
 3. If two adjacents numbers are not in order swap them and add one swap to the counter.

* Insertion sort *

- The idea is the move the elements in place, while you are going through the array. Shifting the
elements out of the way if necessary to make room as you go.

O(n^2) // have to go throught the whole array and each time shift numbers in the sorted part to get the
       // unsorted one in.
Ω(n) // The array is sorted so you just have to go to each element once n times.

Pseudocode :
- Call the firt element of the array sorted.
  1. Repeat until all elements are sorted.

* Merge Sort *

- In merge sort, the idea of of the algorithm is to sort smaller arrays  and then combine those arrays together (merge them) in sorted order.
Merge sort leverages in recursion.

O(n log n) // We have to split n elements up and then recombine them, effectively doubling the sorted subArray as we built them up.

Ω(n log n) // The array is already sorted, but we still have to go through the whole steps to find out.

Pseudocode :
1. Sort the left side of the array (assuming n > 1).
2. Sort the right side of the array (assuming n > 1).
3. Merge the two halves together.

** SEARCHING ALGORITHMS **

* Linear search *

- Is going through an array from left to right searching for the element.

O(n) // have to go through each n elements to find it.
Ω(1) // If you find the element in the first try, so is constant time the best case scenario.

Pseudocode :
- Repeat, starting at the first element :
 1. If the first element is what your looking for, stop.

* Binary search *

- Is going through an array dividing and conquer, looking in the halfs that have the range for the element.

O(logn)
Ω(1)

Pseudocode :
 - Repeat until the (sub)array is of size 0 :
  - Calculate the middle point of the (sub)array.
  - If the target is at the middle stop.
  - Otherwise, if the target is less than whats at the middle,repeat.
  - Otherwise, if the target is greater than whats at the middle, repeat, changing the start point to be just the right of the middle.

//========================================RECURSION========================================================\

Is when a function call itself. In general but not always recursion replace loops in non-recursive
functions.
It is posible to have more than one base case or recursive case.

- Call Stack : the system sets aside space in memory for that function to do its neccesary work.
We usually call chunks of memory stack frames or function frames.
More than one function memory can exists at a given time.


- Example :

int factorial(int n)
{
    if (n == 1) // Base case => if (n == 1) { return 1; } // the factorial of one is 1.
    return 1;
    else
        return n * factorial(n - 1); // recursive case => for any other number what's the pattern?
                                     // fact(2) = 2 * 1 => fact(2) = 2 * fact(1) => n * fact(n - 1)

***Note*** : When you have single line loops(like in recursive) or single conditional branches you
can eliminate the {}.

//============================================GDB (GNU Debugger)================================================================================================================

CLI commands
To start the debugger:

- gdb <program name> ==>  This will pull the gdb environment.

- b <function name> <line number> ==> Break, stops the program in the function or in the line.

- r <command line argument> ==> Runs the program with the provided command line argument.

- n ==> will step forward one block of code.

- s ==> Will step forward pne line of code.

- p <variable> ==> Prints out the value of the given variable.

- info locals ==> prints out the values of all the local variables.

- bt ==> Shows you what series of function calls have led you to the current point in the program.

- q ==> quits gdb.

//==========================================================MEMORY===============================================================================================================

-- char * --

* Memory allocation *

- pointer (*) => IMPORTANT is like the key or the address of the memory where the data type is saved. Go to the address.
Example : char *s;

Once a pointer is declared, you can refer to the thing it points to, known as the target of the pointer, by "dereferencing the pointer". To do this, use the unary * operator:
  int * ptr;		// ptr is now a pointer-to-int

  // Notation:
  //    ptr	refers to the pointer itself
  //    *ptr    the dereferenced pointer -- refers now to the TARGET
Suppose that ptr is the above pointer. Suppose it stores the address 1234. Also suppose that the integer stored at address 1234 has the value 99.
  cout << "The pointer is: " << ptr;	// prints the pointer
  cout << "The target is: " << *ptr;	// prints the target

  // Output:
  //  The pointer is: 1234		// exact printout here may vary
  //  The target is: 99

- & => get me the address of something.(Assign the address of a pointer.)

string s == Char *s ==> is the data type and * is the pointer(The address in memory where the first char is allocated).

Example :

string s = get_string("String: ");


User input : Stelios

memory allocation S|T|E|L|I|O|S|\0 == 8 bytes for this "string" but the pointer in this case "s" is for |S| and from there the computer checks the whole string.

- NULL : In computer programming, null is both a value and a pointer. Null is a built-in constant that has a value of zero. It is the same as the character 0 used to terminate
strings in C. Null can also be the value of a pointer, which is the same as zero unless the CPU supports a special bit pattern for a null pointer.

- What Is a Null Value?
In a database, zero is a value. The value null means that no value exists. When used as a value, null is not a memory location.
Only pointers hold memory locations. Without a null character, a string would not correctly terminate, which would cause problems.

- malloc() : function that means memory allocation(from the HEAP), it takes 1 argument is an int that specifies the number of bytes(size) you want. Malloc returns the address of the
memory assigned(to the first char).

- calloc() : function that means clearing the memory, Initializing everything in 0's.

- realloc() : function that takes a chunk of memory and modifies it's size.

- sizeof() : sizeof. In the programming languages C and C++, the unary operator sizeof generates the SIZE of a variable or datatype,
measured in the number of char-sized storage units required for the type. ... The result has an unsigned integral type that is usually denoted by size_t.
sizeof() will only work for a fixed size array (which can be static, stack based or in a struct).
If you apply it to an array created with malloc (or new in C++) you will always get the size of a pointer. And yes, this is based on compile time information.

This type is used to represent the size of an object. Library functions that take or return sizes expect them to be of type or have the return type of size_t.

- Syntactic sugar : In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express.
It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.

Example :
// syntactic sugar
for (int i = 0, n = strlen(s); i < n; i++)
    {
        printf("%c\n", s[i]);
    }
    return 0;
// under the hood
for (int i = 0, n = strlen(s); i < n; i++)
    {
        printf("%c\n", *(s + i)); // points the pointer + the next arithmetic of the address.
    }
    return 0;

** scanf ** <stdio.h>

Is a function that is used to take input. const ==> encountering it prior to the * means the qualifier is applied to the data pointed to.
- syntax : int scanf(const char * format, ...);

Example :

int x;
   printf("x: ");
   scanf("%i", &x); //"%i" => Here you take the input "placeholder" , &x => (& => find the address) and assigned to the address of a variable(pointer)
   printf("x: %i\n", x);

** Stack and Heap ** // memory structure

- When you call new memory it comes from the heap. everytime we use malloc it comes from the heap.


- Anytime you call a function the memory for your local variables comes from the stack.

Note : functions don't have access to each others memory.

- Pointer Rules - :
1. Pointer and pointee are separated, don't forget to set the pointee!!!! // *x = 42 (pointer and the = is the pointee in this case an int => malloc(size_t(int))) dereference
2. Dereference a pointer to access its pointee.
3. assignment (=) between pointers makes them point to the same pointee. (Sharing) // x = y;

** Stack Overflow
   Heap Overflow
   Buffer Overflow

- memcpy() =>

// takes the second argument of the command line and calls function foo
//function foo takes a char pointer as a parameter and creates a char array of size 12(12bytes)
// then copies whatever is in the array c to the pointer bar keeping in mind the length of bar.(bytes)

void foo(char *bar)
{
  char c [12];
  memcpy(c,bar,strlen(bar));
}

int main (int argc, char *argv[])
{
  foo(argv[1]);
}

* memcpy => a function that copies memory :

The C library function void *memcpy(void *str1, const void *str2, size_t n) copies n characters from memory area str2 to memory area str1.

Declaration
Following is the declaration for memcpy() function.

void *memcpy(void *str1, const void *str2, size_t n)
Parameters
str1 − This is pointer to the destination array where the content is to be copied, type-casted to a pointer of type void*.

str2 − This is pointer to the source of data to be copied, type-casted to a pointer of type void*.

n − This is the number of bytes to be copied.

Return Value
This function returns a pointer to destination, which is str1.

Example
The following example shows the usage of memcpy() function.

 Live Demo
#include <stdio.h>
#include <string.h>

int main () {
   const char src[50] = "http://www.tutorialspoint.com";
   char dest[50];
   strcpy(dest,"Heloooo!!");
   printf("Before memcpy dest = %s\n", dest);
   memcpy(dest, src, strlen(src)+1);
   printf("After memcpy dest = %s\n", dest);

   return(0);
}
Let us compile and run the above program that will produce the following result −

Before memcpy dest = Heloooo!!
After memcpy dest = http://www.tutorialspoint.com


* In a stack memory structure the main function is always going to be the RETURN ADDRESS. As soon as functions are done executing they return to the main function

The buffer overflow exploit is when a function use more memory that is not supposed to and ends deleting the memory assigned to main, so when the program is
supposed to return to main it doesn't because main doesn't exist anymore.
//===============================================================REPRESENTING IMAGES==============================================================================================
** GRAPHICAL FILE FORMATS*

* Hexadecimal *

- 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f. //  16 characters in this alphabet.
you can separate a byte in two.

Example :

decimal = 255P
hexadecimal = ff // always is represented with 0xff
binary = 1111 1111


* JPEG *
- this files always ends int this three bytes 255 216 255 (decimal values)

In hexadecimal that means that the 3 files in a .JPEG will be 0xff 0xd8 0xff

* BMP * //Bitmap  (one of the early ones!)

- FILE STRUCTURE : Normally a file is just 0 and 1, but they are lay out in patterns.

* struct *

A struct (short for structure) is a data type available in C programming languages, such as C, C++, and C#. It is a user-defined data type that can store multiple related items. A struct variable is
similar to a database record since it may contain multiple data types related to a single entity.

- A way to invent your own data type

Example :

// Represents a student

typedef struct
{
    char *name;
    char *dorm;
}
student;

//==============================================FILE POINTERS=====================================================================================================================
<> ==// parameters

The file manipulation function exists in the <stdio.h> library, all of them accept File* as their parameter.  is the relationships I/O
Except for fopen(), which is used to get a file pointer in the first place.

Some of the commons functions are :

fopen(), fclose(), fgetc(), fputc(), fread(), fwrite().

-------------

1. fopen() => Opens a file and returns a file pointer of it. Always check the return value to make sure you dont get back NULL.

Syntax : FILE* ptr = fopen(<filename>, <operation>); // ptr => pointer like a,b or a name.

Example :
FILE* ptr1 = fopen("file1.txt", "r"); // r here (operation) is read, read the file.
FILE* ptr2 = fopen("file2.txt", "w"); // w here (operation) is write, write in the file.(It deletes all the previous data and starts writing in it)
FILE* ptr3 = fopen("file3.txt", "a"); // a here (operation) is append, append the file.(It starts from the last piece of data, so it doesn't delete anything)


2. fclose() => is basically closing the pointer that is open.

Syntax : fclose(<file pointer>);

Example :
fclose(ptr1);

3. fgetc() => Reads and returns the next character from the file pointed to.
Note: The operation of the file pointer passed in as a paramater must be "r" for read, or you will suffer an error.

Syntax : char ch = fgetc(<file pointer>);

Example :
char ch = fgetc(ptr1);

So far we can do this,

We can get single characters from a file, If is wrapped in a loop it means we can print the whole characters of a file, one by one essentially.

char ch;
while (ch = fgetc(ptr) != EOF) // EOF => end of file
    printf("%c", ch);

we might put this in a file called cat.c, after Linux command "cat" which essentially does just this.(read)

4. fputc() => Writes or appends the specified character into the pointed-to file.
Note: The operation of the file pointer passed in as parameter must be "w" or "a" or you will suffer an error.

Syntax : fputc(<char>, <file pointer>);

Example :
fputc("A", ptr1);

Now that we can read characters of files and write characters on files, lets extend our previous example to copy one file to another :

char ch;
while (ch = fgetc(ptr) != EOF)
    fputc(ch = ptr2); // basically coping all chars to a different pointer.

We might put this into a file called cp.c, after linux command "cp" which essentially does just this.(copy)

5. fread() => Basically reads <qty> units of size <size> from the file pointed to and stores them in memory in a BUFFER (usually an array) pointed to by <buffer>.
You can read a lot amount of information an stored in some temporary memory.
Note : The operation of the file pointer passed in as paramater must be "r" for read, or you will have an error.

Syntax : fread(<buffer>, <size>, <qty>, <file pointer>);

Example :
int char[10];
fread(char, sizeof(int), 10, ptr); // char is the array pointer, the size of an int is 4 bytes, the qty 10 and the name of the pointer(the file)

-Other way to do it by allocating the memory :

double* arr2 = malloc(sizeof(double) * 80); // assing the memory in a double array with the size of a double 8 bytes times 80 so that would be 640 bytes of data.

-We could also :

char c;
fread(&c, sizeof(char), 1, ptr); // getting and address for the pointer c, the qty => size of it 1 byte, the size of the buffer pointed from the file and the pointer.

6. fwrite() => writes <qty> units of size <size> to the file pointed to by reading them from a BUFFER(usually an array) pointed to by <buffer>.
Note: The operation of the file pointer passed in as paramater must be "w" for write or "a" for append, or you will suffer an error.

Syntax : fwrite(<buffer>, <size>, <qty>, <file pointer>);

Example :
// Here we have data stored already in the array, so we are writing that to the pointed file.
int arr[10];
fwrite(arr, sizeof(int), 10, ptr);

// We can also have a heap chunk of memory with data already stored
double* arr2 = malloc(sizeof(double) * 80);

// Also have the data in a char stored
char c;
fwrite(&c, sizeof(char), 1, ptr)

Other useful functions that comes with stdio.h :

1.fgets() => Reads a full string from a file
2.fputs() => Writes a full string to a file
3.fprintf() => Writes a formatted string to a file
4.fseek() => Allows you rewind or fast-forward within a file
5.ftell() => Tells you at what (byte) position you are within a file
6.feof() => tells you wherever you read to the end of the file
7.ferror() => indicates whether an error has occured in working with a file

//==============================DATA STRUCTURES======================================================

- FILE STRUCTURE : Normally a file is just 0 and 1, but they are lay out in patterns.

* struct *

- A way to invent your own data type

Example :

This is a header file that contains functions
// Represents a student

typedef struct
{
    char *name; // variable
    char *dorm; // variable
}
student;

- How to use

Note : .csv => comma separated values

- The #include is a Preprocessing directive, is copying thw whole code of that header file.

It can be in 2 forms :

a. #include <file> => IS used for the header files included in the standard lists of your compiler

b. #include "file" => Is used for headers  files of your own programs, it searches for a file in the directory
containing the current file.

//----------------------------------------------------MEMORY RECAP-------------------------------------------------------------------------------------------------

- Memory(When you run a program the macro pc gives you memory)

text // the 0 and 1. actual program(compiled one) where your original programs lies first.
----
initialized data // any global variables in your program are store here
----------------
uninitialized data // when your variables don't have values
------------------
heap // When you need the memory to stick for a while
|
|
|

|
|
|
stack // Functions when they are call. Everytime you get a function a frame of memory of stack gets assigned
- Stack is use for short term storage.
-----------------
environment variables

**Note: Keep in mind that when you type int a you are assigning a int to that variable but when you type int *a you are assigning a memory address to the variable
**Note: What is meant by argument in C?
An argument in context with functions is the actual value that is passed to the function ( as input) ,when it is called. However parameter refers to the variables that
are used in the function declaration/definition to represent those arguments that were send to the function during the function call.

- Garbage Values : Garbage, in the context of computers, is used to refer to any unwanted or unused data occupying memory space. Unallocated memory must be free of
garbage values before allocating them, as the presence of garbage values may cause security issues and exceptional conditions.

A macro (short for "macroinstruction", from Greek μακρός 'long') in computer science is a rule or pattern that specifies how a certain input sequence
(often a sequence of characters) should be mapped to a replacement output sequence (also often a sequence of characters) according to a defined procedure.
The mapping process that instantiates (transforms) a macro use into a specific sequence is known as macro expansion.
A facility for writing macros may be provided as part of a software application or as a part of a programming language.
In the former case, macros are used to make tasks using the application less repetitive. In the latter case, they are a tool that allows a programmer to enable
code reuse or even to design domain-specific languages.

//==============================BUFFER OVERFLOW EXPLOIT================================================================================================================

- In computer science, a data buffer (or just buffer) is a region of a physical memory storage used to temporarily
store data while it is being moved from one place to another. ...
However, a buffer may be used when moving data between processes within a computer.


- In information security and programming, a buffer overflow, or buffer overrun, is an anomaly where a program,
while writing data to a buffer, overruns the buffers boundary and overwrites adjacent memory locations.

Buffers are areas of memory set aside to hold data, often while moving it from one section of a program to another, or between programs. Buffer overflows can often
be triggered by malformed inputs; if one assumes all inputs will be smaller than a certain size and the buffer is created to be that size, then an anomalous
transaction that produces more data could cause it to write past the end of the buffer. If this overwrites adjacent data or executable code, this may result in
erratic program behavior, including memory access errors, incorrect results, and crashes.

Programming languages commonly associated with buffer overflows include C and C++, which provide no built-in protection against accessing or overwriting data in any
part of memory and do not automatically check that data written to an array (the built-in buffer type) is within the boundaries of that array. Bounds checking
can prevent buffer overflows, but requires additional code and processing time. Modern operating systems use a variety of techniques to combat malicious buffer
 overflows, notably by randomizing the layout of memory, or deliberately leaving space between buffers and looking for actions that write into those areas ("canaries").

- To check memory allocation we use VALGRIND Valgrind is an instrumentation framework for building dynamic
analysis tools. There are Valgrind tools that can automatically detect many memory management and threading bugs,
and profile your programs in detail. You can also use Valgrind to build new tools.

Valgrind helps detects memory leaks in a program.

** Rubber duck : debugging method of telling the duck the problem and going through the whole function of the
program.

//==========================================LINKED LIST=========================================================================

Data structure :

A linked list is a linear data structure where each element is a separate object. Each element (we will call it
a node) of a list is comprising of two items - the data and a reference to the next node. The last node has a
reference to null. The entry point into a linked list is called the head of the list.

-  INT_MAX is a macro that specifies that an integer variable cannot store any value beyond this limit.



















//=============================================STACKS============================================================

- Stack is a data structure in computer science used to manage functions and memory.

LIFO relation -> last in first out




//============================================QUEUE=============================================================

- QUEUE is a data structure in computer science used to manage functions and memory.

FIFO relation -> first in first out


//============================================BINARY SEARCH TREE=================================================

- Function search

============================================Abstract syntax tree=================================================

- In computer science, an abstract syntax tree (AST), or just syntax tree, is a tree representation of the abstract syntactic 
structure of source code written in a programming language. Each node of the tree denotes a construct occurring in the 
source code. Each node of the tree denotes a construct occurring in the source code. The syntax is "abstract" in the sense 
that it does not represent every detail appearing in the real syntax, but rather just the structural, content-related details. 
For instance, grouping parentheses are implicit in the tree structure, and a syntactic construct like an if-condition-then expression 
may be denoted by means of a single node with three branches.

==========================================CS INTRO================================================================

- Notes : 

 CS=> the study of computers and computation.

 Problem solving: 

 1. Design =>  Design can involve gathering
requirements and developing use cases. How would an individual use the proposed
solution? What features would they need or want?

 2. Implementation =>  can involve building prototype solutions to test the feasibility of the
design. It can involve building individual components and integrating them together.

 3. Testing => Testing involves finding, designing, and developing test cases: actual instances of the
problem that can be used to test your solution. Ideally, the a test case instance involves
not only the “input” of the problem, but also the “output” of the problem: a feasible or
optimal solution that is known to be correct via other means. Test cases allow us to test
our solution to see if it gives correct and perhaps optimal solutions.

 4. Refinement => Refinement is a process by which we can redesign, reimplement and retest our solution.

 Note: 5. Maintenance => The solution we create may need
to be maintained in order to remain functional and stay relevant.

In software design there are two general techniques for problem solving;
top - down and bottom - up design.A top - down design strategy approaches a problem by breaking it down into smaller and smaller problems until either a solution is obvious or trivial or a preexisting solution(the aforementioned “off - the - shelf” solution) exists.The solutions to the subproblems are combined and interact to solve the overall problem.A bottom - up strategy attempts to first completely define the smallest components
    or entities that make up a system first.Once these have been defined and implemented,
    they are combined and interactions between
    them are defined to produce a more complex system.

    Unit 2 n Number of bytes
    Kilobyte(KB) 2 10 1,
    024 Megabyte(MB) 2 20 1, 048, 576 Gigabyte(GB) 2 30 1, 073, 741, 824 Terabyte(TB) 2 40 1, 099, 511, 627, 776 
    Petabyte(PB) 2 50 1, 125, 899, 906, 842, 624 Exabyte(EB) 2 60 1, 152, 921, 504, 606, 846, 976 
    Zettabyte(ZB) 2 70 1, 180, 591, 620, 717, 411, 303, 424 
    Yottabyte(YB) 2 80 1, 208, 925, 819, 614, 629, 174, 706, 176

The first hard disk (IBM 350) was developed in 1956 by IBM and had a capacity of
3.75MB and cost $3,200 ($27,500 in 2015 dollars) per month to lease.

In general, interpreted languages are slower than compiled languages because they are
being run through another program (the interpreter) instead of being executed directly
by the processor.

- JIT (Just in time compilers) : compilers have been developed that take scripts that are not usually compiled,
and compile them to a native machine code format which has the potential to run much
faster than when interpreted.

- Transpilers : Transpilers are source-to-source compilers.
They don’t produce assembly or machine code, instead they translate code in one
high-level programming language to another high-level programming language. This
is sometimes done to ensure that scripting languages like JavaScript are backwards
compatible with previous versions of the language. 
Transpilers can also be used to translate one language into the same language but with different aspects (such as parallel
or synchronized code) automatically added. They can also be used to translate older
languages such as Pascal to more modern languages as a first step in updating a legacy
system.

- Block of code: 

A block of code is a section of code that has been logically grouped together. 
Many languages allow you to define a block by enclosing the grouped code around opening and closing curly brackets. 
Blocks can be nested within each other to form sub-blocks.

- Notes on Docs, comments, and coding style :

* Good code is not just functional, it is also beautiful. Good code is organized, easy to read, and well documented.
* Code should also be well documented. Each line or segment of code should be clear enough that it tells the user what 
the code does and how it does it. 
* In addition, well-written code should contain sufficient and clear comments. A comment in a program is intended for a
human user to read.
* Comments can also detail how a function or piece of code should be used. This is typically done when developing an 
Application Programmer Interface (API) for use by other programmers.

- Control Flow: 

This type of control flow is usually associated with a procedural programming paradigm (which is closely related to imperative or 
structured programming paradigms). Though this text will mostly focus on languages that are procedural (or that have 
strong procedural aspects), it is important to understand that there are other programming language paradigms. 
Functional programming languages such as Scheme and Haskell achieve computation through the evaluation of mathematical 
functions with as little or no (“pure” functional) state at all. Declarative languages such as those used in 
database languages like SQL or in spreadsheets like Excel specify computation by expressing the logic of computation 
rather than explicitly specifying control flow.
 For a more formal introduction to programming language paradigms, 
 a good resource is Seven Languages in Seven Weeks: A Pragmatic Guide to Learning Programming Languages by Tate [36].

- Flowcharts:

Sometimes processes are described using diagrams called flowcharts. A flowchart is a visual representation of an 
algorithm or process consisting of boxes or “nodes” connected by directed edges. 
Boxes can represent an individual step or a decision to be made. 
The edges establish an order of operations in the diagram.

* Types of Flowchart Nodes. Control(Blue color) and action(green) nodes are distinguished by color. 
Control nodes are automated steps 
while action nodes are steps performed as part of the algorithm being depicted.
* Some boxes represent decisions to be made which may have one or more alternate routes 
(more than one directed edge going out of the box) depending on the the result of the Decision.

--------------------------------------------VARIABLES------------------------------------------------------------------

* Variables: In general, most programming languages allow you to use a combination of uppercase A-Z and lowercase a-z 
letters as well as numbers, [0-9] and certain special characters such as underscores _ or dollar signs, $ . 
Moreover, most programming languages (like English) are case sensitive meaning that a variable name using lowercase 
letters is not the same variable as one that uses uppercase letters.

 - Naming Rules & Conventions:

 => There are several general conventions when it comes to variables. An early convention, but still in common use is 
 underscore casing in which variable names consisting of more than one word have words separated by underscore 
 characters with all other characters being lowercase. For example:
 
 average_score, number_of_students, miles_per_hour

  A variation on this convention is to use all uppercase letters such as MILES_PER_HOUR.

 => A more modern convention is to use lower camel casing (or just camel casing) in which variable names with multiple 
 words are written as one long word with the first letter in each new word capitalized but with the first word’s first 
 letter lowercase. For example:
  
 averageScore, numberOfStudents, milesPerHour

 => another similar convention is upper camel casing, also known as "PascalCase" which is like camel casing, but the 
 first letter in the first word is also capitalized:
 
 AverageScore, NumberOfStudents, MilesPerHour

  "PascalCase" is used to denote user defined types such as classes or structures, and underscore uppercasing is used to 
  denote static and constant variables).

 * In addition to these conventions, there are several best-practice principles when deciding on identifiers :

 => Be descriptive, but not verbose – Use variable names that describe what the variable represents.

 => Avoid abbreviations (or at least use them sparingly) – You’re not being charged by the character in your code;
 you can afford to write out full words

 => Avoid acronyms (or at least use them sparingly) – Using acronyms in variable names come with many of the same 
 problems as abbreviations.

 => Avoid pluralizations, use singular forms

 * In the end, a good balance must be struck between readability and consistency. Rules and conventions should be followed, 
 until they get in the way of good code that is.
  
 - Types: 

 A variable’s type (or data type) is the characterization of the data that it represents. As mentioned before, 
 a computer only “speaks” in 0s and 1s (binary). A variable is merely a memory location in which a series of 0s and 1s 
 is stored.

 The type of a variable is important because it affects how the raw binary data stored at a memory location is interpreted. 
 Moreover, some types take a different amount of memory to store. For example, an integer type could take 32 bits while 
 a floating point type could take 64 bits. Programming languages may support different types and may do so in different 
 ways.

 => Numeric types: There are several numeric types that are supported by various programming languages. The most simple 
 is an integer type which can represent whole numbers 0, 1, 2, etc. and their negations, −1,−2,.... Floating point 
 numeric types represent decimal numbers such as 0.5, 3.14, 4.0, etc. However, neither integer nor floating point numbers 
 can represent every possible number since they use a finite number of bits to represent the number.

  As humans, we “think” in base-10 (decimal) because we have 10 fingers and 10 toes. When we write a number with 
  multiple digits in base-10 we do so using “places” (ones place, tens place, hundreds place, etc.). Mathematically, 
  a number in base-10 can be broken down into powers of ten; for example:

  3,201=3×103 +2×102 +0×101 +1×100

  In general, any number in base-10 can be written as the summation of powers of 10
  multiplied by numbers 0–9,

  ck ×10k +ck−1 ×10k−1 +···c1 ·101 +c0

  - In binary, numbers are represented in the same way, but in base-2 in which we only have 0 and 1 as symbols.

 In many programming languages, a prefix of 0b is used to denote a number represented in binary.

   Representing negative numbers is a bit more com- plicated and is usually done using a scheme called two’s complement.
   We omit the details, but essen- tially the first bit in the representation serves as a sign bit: zero indicates 
   positive, while 1 indicates negative.

   When represented using two’s complement, binary numbers with n bits can represent numbers x in the range

    n = bits 

   −2n−1 ≤x≤2n−1 −1

   The −1 captures the idea that we start at zero. The exponent in the upper bound is n − 1 since we need
   one bit to represent the sign.

   n (number of bits)       minimum                                maximum
   8                         -128                                    127
   16                        -32,768                                 32,767
   32                        -2,147,483,648                          2,147,483,647
   64                        -9,223,372,036,854,775,808              9,223,372,036,854,775,807
   128                       ≈ −3.4028 × 10**38                      ≈ 3.4028 × 10**38

   - Declaring Variables: Dynamic vs. Static Typing:

 *A language that requires you to declare a variable and its type is a statically typed language.  
 *Typically interpreted languages, you do not have to declare a variable before using it,
  such languages are generally referred to as dynamically typed languages.

    At first glance it may seem that dynamically typed languages are better. Certainly they are more flexible 
    (and allow you to write less so-called “boilerplate” code), but that flexibility comes at a cost. Dynamically typed 
    variables are generally less efficient. Moreover, dynamic typing opens the door to a lot of potential type mismatching errors. 
    For example, you may have a variable that is assumed to always be an integer. 
    In a dynamically typed language, no such assumption is valid as a reassignment can change the variable’s type. 

  - Scoping:

The scope of a variable is the section of code in which a variable is valid or “known.” 
In a statically typed language, a variable must be declared before it can be used.    

  A globally scoped variable is valid throughout the entirety of a program. 
  A global variable can be accessed and referenced on every line of code   

  - Operators:

Now that we have variables, we need a way to work with variables. That is, given two variables we may wish to add them together. 
Or we may wish to take two strings and combine them to form a new string. 
In programming languages this is accomplished through operators which operate on one or more operands. An operator takes the values of its operands and combines them in some way to produce a new value.

  ex:
  +, - ,etc.

  js =>
  let a = 2;
  leb b = 5;

    let c = a + b;
  operand(operator)operand
       gets evaluated


  - Assignment Operators:

unary: (especially of a mathematical operation) consisting of or involving a single component or element.

  The assignment operator is a unary operator that allows you to take a value and assign it to a variable.

  The assignment operator usually takes the following form: the value is placed on the right-hand-side of the 
  operator while the variable to which we are assigning the value is placed on the left-hand-side of the operator.

  ex: 
  a = 10

  - Numerical Operators:

Numerical operators allow you to create complex expressions involving either numerical literals and/or numerical variables. 
For most numerical operators, it doesn’t matter if the operands are integers or floating point numbers. 

  ** Careful! Some languages specify that the result of an arithmetic operation on variables of a certain type must match. 
  That is, an integer plus an integer results in an integer. 
  A floating point number divided by a floating point number results a floating point number. 
  When we mix types, say an integer and a floating point number, the result is generally a floating point number. 

  - Integer Division:

Recall that in arithmetic, when you divide integers a/b, b might not go into a evenly in which case you get a remainder.

  syntax:
  a = qb + r

  Where a is the dividend, b is the divisor, q is the quotient (the result) and r is the remainder. 

  Many programming languages support this operation using the percent sign. For example, (modulo)
  c = a % b; 

  - String Concatenation:

Strings can also be combined to form new strings. In fact, strings can often be combined with non-string variables to form new strings.
The operation of combining strings is referred to as string concatenation. Some languages support this through the same plus 
operator that is used with addition.

  - Order of Precedence:

In mathematics, when you write an expression such as: 

  a+b·c
  
  you interpret it as “multiply b and c and then add a.” 

  **This is because multiplication has a higher order of precedence than addition.

   The order of precedence (sometimes referred to as order of operations)  is a set of rules which define the order in which operations should be evaluated.


  ** Common numerical errors:

   - Division by zero: 
a where b = 0. This is an undefined operation in mathematics b
and also in programming languages.

   -Similarly, the natural logarithm of zero, ln (0) and negative values, ln (−1) is undefined. 
   In either case you could expect a result like “NaN” or “INF.”

   -Still other operations seem like they should be valid, but because of how numbers are represented in binary, the results are invalid. 
   Recall that for a 32-bit signed, two’s complement number, the maximum representable value is 2,147,483,647.

   -A similar phenomenon can happen with floating point numbers. when an arithmetic operation involving floating-point numbers results in a number that is smaller than the smallest 
   representable number underflow occurs resulting in an invalid result.

   -Floating-point operations can also result in a loss of precision even if no overflow or underflow occurs. For example, when adding a very large number a and a very small number b, the result might be no different from the value of a. This is because
  (for example) double precision floating point numbers only have about 16 significant digits of precision with the least significant digits being cutoff in order to preserve the magnitude.
   
   - Other Operators:

 These operators are generally syntactic sugar: the don’t add any functionality. The same operation could be achieved using other operators. However, they do add simpler or more terse syntax for doing so.

    
    a. Increment Operators:(postfix)
    i = i + 1 
    i++ 
    or 
    i = i - 1
    i--

    ** Note : Some languages define similar prefix increment operators, ++i and --i . The effect is similar: each adds or subtracts one from the variable   
    However, the difference is when the operator is used in a larger expression. A "postfix" operator retains the original value for the expression, 
    a "prefix" operator takes on the new, incremented value in the expression.

    Example:
    x = 5 + (i++);
    The value of x after this code is 15 while the value of i is now 11. 
    This is because the postfix operator increments i , but i++ retains the value 10 in the expression. 
    
    x = 5 + (++i);
    the variable i again now has the value 11, but the value of x is 16 since++ i takes on the new,
        incremented value of 11. Appropriately using each can lead to some very concise code,
        but it is important to remember the difference.

  - Compound Assignment Operators:

If we want to increment or decrement a variable by an amount other than 1 we can do so using compound assignment operators that combine an arithmetic operator and an assignment operator into one. For example, a += 10 would add 10 to the variable a .
  
  //you can also use compound assignment operators with variables:
  int a = 10;
  int b = 5;
  a += b; //adds the value stored in b to a

  - Standard Input & Output:

The standard input (stdin for short), standard output (stdout) and standard error (stderr) are three standard communication streams that are defined by most computer systems.
  
  Though perhaps an over simplification, the keyboard usually serves as a standard input device while the monitor (or the system console) serves as a standard output device. The standard error is usually displayed in the same display but may be displayed differently on some systems (it is typeset in red in some consoles that support color to indicate that the output is communicating an error).
  
  - Graphical User Interfaces:

A much more user-oriented way of reading input and displaying output is to use a Graphical User Interface (GUI).
  
  - Output Using printf() -style Formatting:

printf() -style Methods in Several Languages. Languages support format- ting directly to the Standard Output as well as to strings that can be further used or manipulated. Most languages also support printf() -style formatting to other output mechanisms (streams, files, etc.).
  
  ex:
           stdin       stdout
  C    | printf() |  sprintf()
  Java | system.out.printf()         |   String.format()
  PHP  |   printf()       |    sprintf()

  Recall that many languages allow you to concatenate a string and a non-string type in order to produce a string that can then be output to the standard output. However, concatenation doesn’t provide much in the way of customizability when it comes to formatting output. We may want to format a floating point number so that it only prints two decimal places (as with US currency). We may want to align a column of data so that number places match up. Or we may want to justify text either left or right.
  
  Such data formatting can be achieved through the use of a -style formatting
  function.

  ( printf() stands for print formatted)

  The function works by providing it a number of arguments. The first argument is always a string that specifies the formatting of the result using several placeholders (flags that begin with a percent sign) which will be replaced with values stored in variables but in a formatted manner. Subsequent arguments to the function are the list of variables to be printed; each argument is delimited by a comma.
  
  ex: 
                                                        print list 
                                                          /
  printf("The value of a = %d, the value of b is %f\n", a, b);
                            \                      / 
                          placeholder          placeholder

  Though there are dozens of placeholders that are supported, we will focus only on a few:

  *%d formats an integer variable or literal
  *%f formats a floating point variable or literal
  *%c formats a single character variable or literal
  *%s formats a string variable or literal
  
  Note : Misuse of placeholders may result in garbage output. For example, using an integer placeholder, %d , but providing a string argument; since strings cannot be (directly) converted to integers, the output will not be correct.

  In addition to these placeholders, you can also add modifiers:

  A number n between the percent sign and character ( %nd , %nf , %ns )) specifies that the result should be formatted with a minimum of n columns.

  Floating-point numbers have a second modifier that allows you to specify the number of digits of precision to be formatted. In particular, you can use the placeholder (%n.mf) in which n has the same meaning, but m specifies the number of decimals to be displayed.

  Finally, each of these modifiers can be made negative (example: %-20d ) to left-justify the result. By default, justification is to the right. 

  - Command Line Input:

Not all programs are interactive. In fact, the vast majority of software is developed to interact with other software and does not expect that a user is sitting at the console.

  Input provided from the command line are usually referred to as command line arguments. 

  ex:

  ~>./myProgram a 10 3.14
  
  Then we would have provided 4 command line arguments. The first argument is usually the program’s name, all subsequent arguments are separated by whitespace.

  Within a program, command line arguments are usually referred to as an argument vector (sometimes in a variable named argv ) and argument count (sometimes in a variable
  named argc ).

  - Debugging:

Errors in computer programs are usually referred to as bugs.

   * Types of Errors:

When programming, there are several types of errors that can occur. Some can be easily detected (or even easily fixed) by compilers and other modern code analysis tools such as IDEs.
 
   - syntax errors:
A syntax error can be a failure to adhere to the rules of the language such as misspelling a keyword or forgetting proper “punctuation” (such as missing an ending semicolon).
Typically syntax errors prevent you from even compiling a program, though syntax errors can be a problem at runtime with interpreted languages.

   - Runtime errors: 
Once a program is free of syntax errors it can be compiled and be run. However, that doesn’t mean that the program is completely free of bugs, just that it is free of the types of bugs (syntax errors) that the compiler is able to detect.
A compiler cannot be expected to detect such errors because, by definition, the conditions under which runtime errors occur occur at runtime, not at compile time.
   - Logic errors: 
Errors may be a result of bad code or bad design. Computers do exactly as they are told to do. Logic errors can occur if we tell the computer to do something that we didn’t intend for them to do. 
  
   When developing software, we can also design a collection of test cases: a set of inputs along with correct outputs that we would expect the program of code to produce.
   
   * errors strategies:
   
A common beginner’s way of debugging a program is to insert temporary print statements throughout their program to see what values variables have at certain points in an attempt to isolate where an error is occurring.

   This is an okay strategy for extremely simple programs, but its the “poor man’s” way of debugging.

   Instead, it is much better to use a proper debugging tool in order to isolate the problem. A debugger is a program, that allows you to “simulate” an execution of your program.

    there are command line debuggers such as GDB (GNU’s Not Unix! (GNU) Debugger) that you interact with using text commands.

   In general, debugging strategies attempt to isolate a problem to the smallest possible code segment. 
   It is also good practice to create test cases and test suites as you develop these small pieces of code.

- Conditionals:

Normally, the control flow of a program is sequential: each statement is executed top-to- bottom one after the other. A conditional statement (sometimes called selection control structures) interrupts this normal control flow and executes statements only if some specified condition holds.

By using conditional statements, we can design more expressive programs whose behavior depends on their state: 

Similarly, our programs need to be able to “make decisions” based on various conditions (they don’t actually make decisions for themselves as computer are not really “intelligent”, we are simply specifying what should occur based on the conditions). Conditions in a
program are specified by coding logical statements using logical operators.

- Logical Operators:

 a logical statement is an assertion that is either true or it is false.

 - Comparison Operators:

 Comparison operators are usually binary operators in that they are applied to two operands: a left operand and a right operand. For example, if a,b are variables (or constants or expressions), then the comparison,

 ex: 

 a≤b

 and in code, we may try to do something like
 0 <= x <= 10 

 However, when used in code, the operators are binary and must be applied to two operands. The result is then used in the second comparison which results in a question such as true ≤ 10 or false ≤ 10.

 Some languages would treat this as a syntax error and not allow such an expression to be compiled since you cannot compare a Boolean value to a numerical value. However, other languages may allow this, typically representing true with some nonzero value such as 1 and false with 0.

 * Other Considerations:

Some dynamically typed languages (PHP, JavaScript, etc.) have additional rules when comparison operators are used with mixed types (that is, we compare a string with a numeric type). They may even have additional “strict” comparison operators such as
and   which are true only if the values and types match. So, for example,   may be true because the values match, but (10 === "10")
would be false since the types do not match (one is an integer, the other a string).

 - Negation: (!) or pseudocode(¬)

 The negation operator is an operator that “flips” the truth value of the expression that it is applied to.

 - Logical And:(&&)

 the logical and operator (also called a conjunction) is a binary operator that is true if and only if both of its operands is true.
 
 Many programming languages use two ampersands, a && b to denote the logical And operator.2 However, for our pseudocode we will adopt the notation And and we will use expressions such as a And b.

 - Logical Or:(||)
 
 The logical or operator is the binary operator that is true if at least one of its operands is true.

 Many programming languages use two vertical bars (also referred to as Sheffer strokes), || to denote the logical Or operator.3. However, for our pseudocode we will adopt the notation Or, thus the logical or can be expressed as a Or b. Table 3.4 contains a truth
 table representation of the logical Or operator.

 - Compound Statements:

 A statement that is always true regardless of the truth values of its variables is a tautology.

 a Or ¬a = false Or true

 A statement that is always false regardless of the truth values of its variables is a contradiction.

 a And ¬a = false And true

 In most cases, it is pointless to program a conditional statement with tautologies or contradictions: if an if-statement is predicated on a tautology it will always be executed. Likewise, an if-statement involved with a contradiction will never be executed.

 - De Morgan’s Laws: 

 When a logical And statement is negated, it is equivalent to an unnegated logical Or statement and vice versa. That is:

 ¬(a And b) and ¬a Or ¬b


Page 107

// Data structures review //

- Steps for good code
1. Readable
2. Scalabale

** Scalable basically means that when the data gets bigger, how much the algorithm changes.(slow down)

N# opeartions vs elements(data)

- O(n) => The big O of N or linear time(is based on data). The number of operations increases proportionally.

- O(1) => The big O of 1 or constant time(whatever you do the number of operations are going to be the same). It doesn't matter the size of the input(data).

- O(n^2) => Nested loops is a good example, O(n * n). Quadratic time. 

- 

Simplyfing Big O:

Ex: 

You get a function that line by line gives you O(1) and other lines gives you O(n) => If it's maximazied by n or linear time that means that the time complexity of that algo is O(n).

Rule book of O:

Rule 1 - Worst case => Always give the Big O based on the worst scenario.
Rule 2 - Remove constants => Ignore Variable assignments and small calculations. Example: O(2n) drop constants O(n)
Rule 3 - Different terms for inputs => 
Rule 4 - Drop non dominants => Example: O(n + n^2) => this will be O(n^2), n is not dominant.




 
