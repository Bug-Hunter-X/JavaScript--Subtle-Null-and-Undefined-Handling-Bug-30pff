# JavaScript: Subtle Null and Undefined Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to the handling of null and undefined values.  The bug arises from an incorrect comparison using the loose equality operator (`==`) which does not differentiate between null and undefined in certain circumstances.

## Bug Description

The provided JavaScript function `foo` aims to handle null, strings, and numbers differently. However, the conditional statement `if (x == null)` treats both `null` and `undefined` as truthy, leading to an incorrect result when `undefined` is passed as an argument.  Specifically, the function incorrectly returns `NaN` instead of 0 when passed `undefined`.

## Solution

The solution involves using strict equality (`===`) to explicitly check for `null` and `undefined` separately, ensuring the function behaves as intended in all cases.