+++
title = "Visual Debugger"
date = "2022-06-25"
+++

## Why

The first programming language I really got comfortable with was Java. It was
good for learning in high school because its object oriented-ness makes it
pretty easy to build a mental model for how Java works internally. That's not to
say that there aren't weird quirks like the integer object cache, but on the
whole, Java code and data can be broken down into easy to understand models. For
AP Computer Science, my teacher used this to create a visual model of a running
program on a whiteboard, and manipulate it to demonstrate code execution. When
learning C for systems programming in college, I found myself wishing that I
could do the same thing, and probably wasn't the only one. In my microprocessors
class, there was a whole confusing discussion raised by asking what "type" a
part of an expression was in C. Especially once compiled, C doesn't have the
same highly compartmentalized concept of types, which makes it harder to reason
about in the same way that Java-proficient students were used to.

[TODO: use this tutorial to build this site](https://www.youtube.com/watch?v=p0bGHP-PXD4)

This project is an attempt to create the kind of tooling I've come to appreciate
when working with Java, but for compiled languages, especially simple C
programs. Learning C and GDB at the same time just isn't very fun.
