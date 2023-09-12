package edu.cmu.cs.cs214.rec02;

import org.junit.Before;
import org.junit.Test;

import java.util.List;
import java.util.Scanner;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import static org.junit.Assert.*;



public class ArrayIntQueueTest {
    
    private ArrayIntQueue mQueue;
    private List<Integer> testList;

    @Before
    public void setUp() {
        mQueue = new ArrayIntQueue();
        testList = new ArrayList<>(List.of(1, 2, 3));
    }

    @Test
    public void testClear()
    {
        for (int i = 0; i < testList.size(); i++) {
            mQueue.enqueue(testList.get(i));
        }
        mQueue.clear();
        assertTrue(mQueue.isEmpty());
    }

    @Test
    public void testDeuqueEmpty() {
        assertNull(mQueue.dequeue());
    }

    @Test
    public void testEnsureCapacity() {
        
        // Let the head not at index-0
        for(int i = 0; i < testList.size(); i++) {
            mQueue.enqueue(testList.get(i));
        }
        for(int i = 0; i < testList.size(); i++){
            mQueue.dequeue();
        }

        for (int i = 0; i < 100; i++) {
            mQueue.enqueue(i);
        }
        assertEquals(100, mQueue.size());
        for(int i = 0; i < 100; i++) {
            assertEquals(i, (int) mQueue.dequeue());
        }
    }
}
