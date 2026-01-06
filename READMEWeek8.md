# INFT1016-Mabindra
# **This is a large heading.**

This is a paragraph. Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## **This is a medium hading.**

This is another paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### **This is a small headin.**

This is another paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

*This text is italic*

**This text is bold**

***This text is bold and italic***

Here's an unordered list, with:
<ul>
    <li>One item
    <li>Two item
    <li>Three item
<ul>
<ul>
        <li>Sub-item one!
        <li>Sub-item two!
<ul>



 Here's an ordered list, with:
<ol>
    <li>Item one
    <li>Item two
    <li>Item Three
<ol>



> This is a block quote. It should be in block quotes! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


Inline code: make `this word` inline




Format this text as code.



```
def foo():
    if not bar:
        return True`
```



![g](https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Kismet-IMG_6007-black.jpg/800px-Kismet-IMG_6007-black.jpg)


def is_valid_luhn(number_str):
    total_sum = 0
    # Reverse the string so we can count from the right easily
    reversed_digits = number_str[::-1]

    for i in range(len(reversed_digits)):
        digit = int(reversed_digits[i])

        # Step 1: Every second digit (starting from index 1) gets doubled
        if i % 2 == 1:
            digit = digit * 2
            # If doubling results in two digits (e.g., 14), add them (1 + 4 = 5)
            if digit > 9:
                digit = digit - 9
        
        # Step 2: Add the digit to our running total
        total_sum += digit

    # Step 3: Check if the total ends in a zero
    return total_sum % 10 == 0

# --- Try it out ---
card_number = "79927398713"

if is_valid_luhn(card_number):
    print("This number is valid!")
else:
    print("This is a fake number.")

    def check_account(number_str):
    total = 0
    # Reverse the string to work from right-to-left
    reversed_num = number_str[::-1]

    for i in range(len(reversed_num)):
        digit = int(reversed_num[i])

        # Double every second digit (index 1, 3, 5...)
        if i % 2 == 1:
            digit = digit * 2
            if digit > 9:
                digit = digit - 9
        
        total = total + digit

    # Check if the total ends in 0
    if total % 10 == 0:
        print("Verification successful! ✨ (•‿•)")
        return True
    else:
        print("Invalid number!")
        return False