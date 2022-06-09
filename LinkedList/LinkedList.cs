using System;
using System.Collections;
using System.Collections.Generic;

namespace LinkedList
{
    class LinkedListNode
    {
        public int data;
        public LinkedListNode nextIndex;

        public LinkedListNode(int _data)
        {
            data = _data;
            nextIndex = null;
        }
    }

    class LinkedList
    {
        linkedListNode head;
        public void AddNodeToFirst(int data)
        {
            LinkedListNode node = new LinkedListNode(data);
            node.nextIndex = head;
        }

        
        public void PrintList()
        {
            LinkedListNode runner = head;
            while (runner != null)
            {
                Console.WriteLine(runner.data);
                runner = runner.nextIndex;
            }

        }

    }
}