# Google Sheet Array to Json Object

Receive a google sheet array formated to a json object.

Input:
    [
        ["A", "B", "C"],
        ["Test 1 A", "Test 1 B", "Test 1 C"],
        ["Test 2 A", "Test 2 B", "Test 2 C"],
        ["Test 3 A", "Test 3 B", "Test 3 C"]
    ]

Output:

    [
        { A: 'Test 1 A', B: 'Test 1 B', C: 'Test 1 C' },
        { A: 'Test 2 A', B: 'Test 2 B', C: 'Test 2 C' },
        { A: 'Test 3 A', B: 'Test 3 B', C: 'Test 3 C' }
    ]