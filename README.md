# React Native: useEffect Cleanup Function Error After Unmount

This repository demonstrates a common error in React Native where a cleanup function within the `useEffect` hook throws an error after the component has unmounted. This typically happens when the cleanup function attempts to access state or props that are no longer available because the component has been removed from the component tree.

## Problem

The `bug.js` file shows an example of this problem.  The `useEffect` hook uses `setInterval` to increment a counter.  The cleanup function attempts to log the value of `count`, even after the component has unmounted which will cause an error.

## Solution

The `bugSolution.js` file provides a solution.  The key change is to add a check within the cleanup function to determine if the component is still mounted before accessing any state or props.  This is often done using a ref or a boolean flag to track the mount status.  The solution demonstrates how to resolve this issue by using a ref.