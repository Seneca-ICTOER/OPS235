---
id: bash-shell-scripting-tips
title: Bash Shell Scripting Tips
sidebar_position: 4
description: Bash Shell Scripting Tips
---

# Bash Shell Scripting Tips

## For Lab 2 - Investigation 3 Part 3

### Data Input

  - A shell can obtain data from a number of methods: **reading input files**, using **arguments when issuing command** (positional parameters), or **prompting for data to store in a variable**. The later method can be accomplished by using the **read** command.
  - Example:

```bash
read -p "Enter your name: " userName.
```

### Mathematical Expressions

  - In the bash shell, data is stored in variable as text, not other data types (ints, floats, chars, etc) like in compiled programs like C or Java. In order to have a shell perform **mathematical operations**, number or variable need to be surrounded by two sets of parenthesis **((..))** in order to convert a number stored as text to a binary number.
  - Examples

```bash
var1=5;var2=10
echo "$var1 + $var2 = $((var1+var2))"
```

**Note**: shell does not perform floating point calculations (like **5/10**). Instead, other commands like **awk** or **bc** would be required for floating point calculations (decimals)

### Loops (for / while / until)

- Determinant loops (such as **for** loops) usually repeat for a preset number of times (eg. counts, positional parameters stored). In-determinant loops (such as **while** or **until** loops) may repeat based on unknown conditions (like waiting for user to enter correct data).
- Conditional statements **&&** (run if previous command or test is true) and **\|\|** (run is previous command or test is false) can also be used when testing multiple conditions.
- Examples:

```bash
set ops235 is fun
for x
do
 echo "argument is $x"
done

for x in $(ls)
do
 echo "Filename: $x"
done

read -p "enter a whole number: " num
until echo $num | grep -q "^[0-9][0-9]*$"
do
 read -p "Incorrect. Please enter WHOLE NUMBER: " num
done

read -p "pick a number between 1 and 10: " num
while [ $num -lt 1 ] || [ $num -gt 10 ]
do
 read -p "Incorrect. Please pick number between 1 and 10: " num
done
```

## For Lab 3 - Investigation 3 Part 3

### The Here Document

- A neat little trick involving a special type of redirection of stdin symbol: **<<** that allows input to be redirected to a command from within the command.
- Examples:

```bash
cat <<+
This is a test message
This is the second line
+
```

```bash
mail -s "test message" youremailaddr <<+
This is a test message
I hope you like it.
+
```

```bash
tr [a-z] [A-Z] <<+
i like ops235
i love scripting.
+
```

### Using sed to Manipulate Text

- The Linux command **sed** stands for **S**treaming **Ed**itor which is an effective way to manipulate a text file, output sent from a command, or from within a "here document". This command can manipulate matching text on a variety of criteria (such as **line number(s)**, **regular expression match**, etc). Commands can then be used for manipulation such as **omitting, printing, substituting, adding**, and **inserting** text.
- The sed option **-n** suppresses display of text so the print (**p**) command can be used; otherwise, the text will be displayed (with edits via the sed command instructions).
- Results of text manipulation with sed can be stored in a variable using command substitution, or redirected to a file. **NEVER redirect the stdout from a sed command to the same input file (or the input file will be destroyed)!**
- Examples

```bash
sed 's/|/ /g' <<+
I|like|weekends!
+
```

```bash
sed 's/$/\n/g' <<+
This text
should be
double-spaced!
+
```

## For Lab 4 - Investigation 3

### The case statement

- The case statement is a control-flow statement that works in a similar way as the if-elif-else statement (but is more concise). This statement presents scenerios or "cases" based on values or regular expressions (not ranges of values like if-elif-else statements).
- After action(s) are taken for a particular scenerio (or "case"), a break statement (;;) is used to "break-out" of the statement (and not perform other actions). A default case (*) is also used to catch exceptions.
- Examples:

```bash
read -p "pick a door (1 or 2): " pick
case $pick in
  1) echo "You win a car!" ;;
  2) echo "You win a bag of dirt!" ;;
  *) echo "Not a valid entry"
     exit 1 ;;
esac
```

```bash
read -p "enter a single digit: " digit
case $digit in
  [0-9]) echo "Your single digit is: $digit" ;;
         *) echo "not a valid single digit"
             exit 1 ;;
esac
```

### The getopts function

- The getopts function allows the shell scripter to create scripts that accept options (like options for Linux commands). This provides the Linux administrator with scripts that provide more flexibility and versatility. A built-in function called **getopts** (i.e. get command options) is used in conjunction with a **while** loop and a **case** statement to carry out actions based on if certain options are present when the shell script is run.
- The variable **$OPTARG** can be used if an option accepts text (denoted in the getopts function with an option letter followed by a colon. Case statement exceptions use the **:)** and **\?)** cases for error handling.
- Example:

```bash
while getopts abc: name
do
  case $name in
    a) echo "Action for option \"a\"" ;;
    b) echo "Action for option \"b\"" ;;
    c) echo "Action for option \"c\""
        echo Value is: $OPTARG" ;;
    :) echo "Error: You need text after -c option"
        exit 1 ;;
    \?) echo "Error: Incorrect option"
        exit 1 ;;
esac
done
```

## For Lab 5 - Investigation 1 Part 2

### Using awk to Manipulate Text

- Very useful command for report generation, text file repair, or text and floating-point decimal manipulation. The command mimics a C program, with braces **{ }** that surround the action to perform based on records from a database file matching either test conditions, regular expressions, etc. Fields appear as numbers with $.
- Examples:

```bash
awk '{print}' data-file.txt
```

```bash
awk -F";" '{print $5,$3}' data-file.txt
```

```bash
awk -F"," '$4 >= 10000 {print $1, $2}' salary.txt
```

### Crontab (Chronograph Tables)

- Used to automatically run (as opposed to manually run) scripts, programs, or commands. There are many tables (files), but the main one is: **/etc/cron**. The **crontab** command can be used to list, create, modify or remove scheduled jobs in the file.
- Examples:

```bash
crontab -e -u user # create/modify
```

```bash
crontab -r -u user-name # remove specific user's crontab
```

```bash
crontab -l -u username #List current schedules
```

## For Lab 6 - Investigation 2 Part 3

### Arrays

- Incredibly useful tool that works like a "storage container" of variables. **Arrays have names like variables, but are numbered for quick storage and access of related elements**. Indices are I.D. numbers for array access. The first index starts at **zero** instead of **1**.
- Instead of using index numbers, you can use I.D. names: this is referred to as an **Associative Array**.
- Examples:

```bash
for((x=0; x<5; x++)) # Example of a regular array
do
  read -p "Enter item #$((x+1)): " item[xx]
done
for((y=0; y<5; y++))
do
  echo ${item[y]}
done
```

```bash
set a b c # Example of an "Associative Array"
for x
do
  read -p "Enter item $x: " item["$x"]
  echo item[$x] is: ${item["$x"]}
done
```

### Working with Temporary Files

- When creating temporary files, it is important NOT to store on a user's account (to avoid overwriting their existing files). Instead, temporary files can be created in the **/tmp** directory.
- The $$ variable can be used as the filename extension which assigns the current PID of the shell script running to make the filename unique, and allow easy removal at the end of the shell script by deleting ALL files in the /tmp directory with the extension: .$$
- Example:

```bash
ls -lR > /tmp/temp-file.$$
grep secret /tmp/temp-file.$$
rm /tmp.$$
```
