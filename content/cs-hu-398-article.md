+++
title = "Current Topics in CS: Rust's Rules in Other Languages"
date = "2022-12-01"
page_template = "pages/article.html"
+++

## Introduction

Over the past few years, I've noticed a distinct change in the way I think about
programming, which I attribute mostly to having learned Rust. While I've mostly
noticed the difference in languages like C, it's also effected how I think about
other more object oriented languages like Java and Python.

## Concepts Rust Helped me Learn

- Ownership
- Lifetimes

## What is ownership?

Each value in a program is "owned" by a single variable, and assigning from one
variable to another "moves" that ownership.

## Rust's Rules

Rust imposes a couple rules upon programmers that are enforced by the compiler,
that to new Rust programmers might seem arbitrary.

### Ownership

Rule 1:
> Each value has an *Owner*.

Rule 2:
> There can only be one *Owner* at a time.

Rule 3:
> When the *Owner* goes out of scope, the value will be deallocated.

Rule 4:
> *Owner*ship can be transferred by "moving" a value to another scope.

<!-- 
### Referencing (Borrowing)

Rule 1:
> Values can be borrowed, which takes a *Reference* to them.

Rule 2:
> *References* can be either mutable or immutable.

Rule 3:
> A value may either have exactly one mutable *Reference*, or any number of
> immutable references to it.

## What Rust's Rules Guard Against
 -->

## Why Track Ownership?

My programming background is mostly filled with Java. In garbage collected
languages, there is no "ownership" but instead a value either can be referenced,
or it can't (and should be GC'd).

In other non-gc languages like C++, memory has to be tracked so it can be deallocated.

<!-- On reason Rust tracks the ownership of variables is to determine their
*Lifetime*, the beginning and end of each value's life from when it is created,
to when it is destroyed. Partially this is just how Rust tracks memory. Each
object can be deallocated once there is no need for it, just like in other
languages. *Lifetimes* can also be used to conceptually track when a value is
valid. For example, in Java you might say that the lifetime of a lazily
initialized variable begins when it is first assigned a non-null value. -->

Tracking ownership is extremely useful in manually memory managed languages.
Thinking about ownership helps you remember what you allocated and exactly what
you need to deallocate in the future.

## Lifetimes

Lifetimes are a concept that I don't think I've ever seen formally introduced in
my classes, but it's been a concept that I've used throughout my programming
journey. *Lifetimes* are the answer to the question "How long does this variable
exist for?" (or "When is this variable valid/accessible/non-null/etc. ?").

Rust codifies lifetimes in the compiler, but in general, thinking about exactly
when values are valid and when they are not is useful, especially in languages
that don't have ways to track them for you.
