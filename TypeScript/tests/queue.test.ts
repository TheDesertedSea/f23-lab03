import exp from "constants";
import { newArrayIntQueue } from "../src/arrayqueue";
import { newLinkedListIntQueue } from "../src/linkedlistqueue.js";

// pick one queue implementation, can run test easily for both, due to subtype polymorphism
let createQueue = newLinkedListIntQueue
// let createQueue = newArrayIntQueue

// TODOs:
// write more test cases to test dequeue and clear functions.
let testList = [5, 10, 1000000]

test("test isEmpty: newly created list should be empty", () => {
    expect(createQueue().isEmpty()).toBeTruthy()
})

test("test isEmpty: list with 1 element is not empty", () => {
    const queue = createQueue()
    queue.enqueue(2)
    expect(queue.isEmpty()).toBeFalsy()
})

test("test clear: newly created list should be empty after clear", () => {
    const queue = createQueue()
    for (let i = 0; i < testList.length; i++) {
        queue.enqueue(testList[i])
    }
    queue.clear()
    expect(queue.isEmpty()).toBeTruthy()
})

test("test dequeue: newly created list should dequeue null", () => {
    expect(createQueue().dequeue()).toBeNull()
})

test("test dequeue: queue with 3 elements should always dequeue the head element", () => {
    const queue = createQueue()
    for (let i = 0; i < testList.length; i++) {
        queue.enqueue(testList[i])
    }

    for (let i = 0; i < testList.length; i++) {
        expect(queue.dequeue()).toEqual(testList[i])
        expect(queue.size()).toEqual(testList.length - i - 1)
    }
})

test("test enqueue: list should enqueue the element at the tail", () => {
    const queue = createQueue()
    for (let i = 0; i < testList.length; i++) {
        if (queue.enqueue(testList[i])) {
            expect(queue.peek()).toEqual(testList[i])
            expect(queue.size()).toEqual(i + 1)
        }
    }
})

test("test peek: newly created list should peek null", () => {

    expect(createQueue().peek()).toBeNull()
})

test("test peek: queue with 3 elements should peek the one that was on the head", () => {
    const queue = createQueue()
    for(let i = 0; i < testList.length; i++) {
        queue.enqueue(testList[i])
    }
    expect(queue.peek()).toEqual(testList[0])
})

test("test peak: newly created list should peek null", () => {
    expect(createQueue().peek()).toBeNull()
})

// can nest tests with shared descriptions for better readability
describe("test size: ", () => {
    test("1 entry", () => {
        const queue = createQueue()
        queue.enqueue(5)
        expect(queue.size()).toBe(1)
    })

    test("11 entries", () => {
        const queue = createQueue()
        for (let i = 0; i < 11; i++)
            queue.enqueue(i)
        expect(queue.size()).toBe(11)
    })
})