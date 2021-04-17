/* Linked list */

// [value, next] -> [value, next] -> [value, next]

class LinkedListNode<Data = unknown, Next extends LinkedListNode = null> {
    public data: Data
    public next: LinkedListNode

    constructor(data: Data, next: LinkedListNode = null) {
        this.data = data
        this.next = next
    }
}

export class LinkedList {
    private head: LinkedListNode
    private tail: LinkedListNode

    constructor() {
        this.head = null
        this.tail = null
    }

    public append(data: unknown): void {
        const node = new LinkedListNode(data)

        if (this.tail) this.tail.next = node
        if (!this.head) this.head = node

        this.tail = node
    }

    public prepend(data: unknown): void {
        const node = new LinkedListNode(data, this.head)

        this.head = node

        if (!this.tail) this.tail = node
    }

    public insertAfter(after: unknown, data: unknown): void {
        const found = this.findLinkedListNode(after)
        if (!found) return

        found.next = new LinkedListNode(data, found.next)
    }

    public find(data: unknown): unknown | undefined {
        return this.findLinkedListNode(data)?.data
    }

    public toArray(): LinkedListNode[] {
        const output: LinkedListNode[] = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }
        return output
    }

    public remove(data: unknown): void {
        if (!this.head) return

        while(this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head
        while(current.next) {
            if (current.next.data = data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }
    }

    private findLinkedListNode(data: unknown): LinkedListNode | undefined {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }

            current = current.next
        }
    }
}
