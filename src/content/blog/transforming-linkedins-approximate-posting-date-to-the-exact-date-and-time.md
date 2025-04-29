---
title: Transforming LinkedIn’s Approximate Posting Date to the Exact Date and Time
description: "Learn how Pinpoint the Exact Posting Date from LinkedIn Activity Numbers Even When You Only See ‘1w’ or ‘3d’"
pubDate: 2024-06-02
slug: transforming-linkedins-approximate-posting-date-to-the-exact-date-and-time
featured: false
draft: false
tags:
  - LinkedIn
  - Python
author:
  name: Oscar
  link: https://example.com/authors/oscar
---



# Transforming LinkedIn’s Approximate Posting Date to the Exact Date and Time

## Discover How to Pinpoint the Exact Posting Date from LinkedIn Activity Numbers Even When You Only See ‘1w’ or ‘3d’.


Examining a LinkedIn post’s HTML source shows a long numeric value tied to each activity. This number can be transformed to reveal the exact posting date from LinkedIn. Here’s how you can decode it.

The Original Activity Number
Let’s start with an example activity number you might find in the HTML code of a LinkedIn post:

![Getting activity number](https://hackmd.io/_uploads/S1hH-S5Dke.png)


`7198200780061900800`

This number is more than just a random value; it actually encodes the exact posting date from LinkedIn in a form that can be decoded.

### Step-by-Step Transformation
**1. Convert to Binary**

First, we need to convert this number to its binary form. In Python, this can be done using the bin() function:

``` python
activity = 7198200780061900800
binary_activity = bin(activity)[2:]  # Remove the '0b' prefix
```

The binary representation looks like this:

`110001111100101001001010111100011000101100001111000000000000000`

**2. Extract the First 41 Digits**

Next, we extract the first 41 digits from this binary string. These digits are crucial as they encode the Unix timestamp in milliseconds.

first_41_digits = binary_activity[:41]
The first 41 binary digits are:

`11000111110010100100101011110001100010110`

**3. Convert Binary to Decimal**

These 41 binary digits represent a Unix timestamp in milliseconds. We need to convert this binary string to a decimal number:

decimal_value = int(first_41_digits, 2)
The decimal value is:

`1716184802070`

**4. Convert to Datetime**

Finally, we convert this Unix timestamp to a human-readable datetime format. Since the timestamp is in milliseconds, we need to divide by 1000 to convert it to seconds before using the datetime module in Python:

```python
import datetime
timestamp = decimal_value / 1000  # Convert milliseconds to seconds
date_time = datetime.datetime.fromtimestamp(timestamp)
```

The resulting datetime is:

`2024-05-20 06:00:02.070000`

### Example Result

Following these steps, you can transform the activity’s number, `7198200780061900800`, into a precise datetime format, revealing the exact posting date from LinkedIn. For this example, the resulting datetime is:

`May 20, 2024, 06:00:02 AM GMT`

### Full code

``` python
import datetime

# Step 1: Transform to binary
activity = 7198200780061900800
binary_activity = bin(activity)[2:]  # Remove the '0b' prefix

# Step 2: Get the first 41 digits of the binary representation
first_41_digits = binary_activity[:41]

# Step 3: Transform these 41 digits to decimal
decimal_value = int(first_41_digits, 2)

# Step 4: Convert the decimal value (UNIX timestamp in milliseconds) to date time format
timestamp = decimal_value / 1000  # Convert milliseconds to seconds
date_time = datetime.datetime.fromtimestamp(timestamp)

print("Binary Representation:", binary_activity)
print("First 41 Binary Digits:", first_41_digits)
print("Decimal Value:", decimal_value)
print("Date Time:", date_time)
```

### Summary
To summarise, here are the steps to decode a LinkedIn activity number:

1. Convert the activity number to binary: Use a simple conversion method to get a long string of binary digits.
2. Extract the first 41 binary digits: These digits encode the timestamp in milliseconds.
3. Convert these binary digits to a decimal number: This gives you the Unix timestamp in milliseconds.
4. Interpret the decimal number as a Unix timestamp: Convert it to a human-readable datetime format.
5. 
Following these steps, you can transform any LinkedIn activity number into a readable date and time, helping you understand exactly when a particular activity occurred. This can be especially useful for developers and anyone interested in the precise timing of LinkedIn activities.

Feel free to explore this with other activity numbers in LinkedIn posts’ HTML source code. It’s a handy trick to enhance your understanding of LinkedIn’s data.