sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server
    participant D as Database

    U->>B: Type a new note into the text field
    U->>B: Click "Save" button
    Note right of B: Browser captures the input note text

    B->>S: POST /new_note HTTP<br/>Body: { "content": "Note text" }
    Note right of S: Server receives JSON, parses content

    S->>D: INSERT note into database
    D-->>S: Success confirmation

    S-->>B: HTTP 302 Redirect to /notes
    Note right of B: Browser follows redirect

    B->>S: GET /notes
    S->>D: SELECT all notes
    D-->>S: Notes list
    S-->>B: HTML page with notes
    B-->>U: Display updated page with new note shown