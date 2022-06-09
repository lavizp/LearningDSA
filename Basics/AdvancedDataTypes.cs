using System;
using System.Collections;
using System.Collections.Generic;

namespace Basics
{
    class AdvancedDataTypes
    {
        public void AdvancedData()
        {
            int numberOfObjectsinArray = 2;
            int[] myArray = new int[numberOfObjectsinArray];


            List<int> myList = new List<int>();


            Stack myStack = new Stack(); //Last in Fist Out
            myStack.Push(1);
            myStack.Push(2);

            Queue myQueue = new Queue(); //First in First Out
            myQueue.Enqueue(1);
            myQueue.Enqueue(2);

        }
    }
}