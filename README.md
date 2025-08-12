# Custom JS Tokenizer

A simple and efficient API service built with Node.js and Express that provides endpoints for tokenizing and detokenizing text.

---

## Installation

To get started, you'll need to have **Node.js** installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/itzrealashwin/Custom-Tokenizer.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Custom-Tokenizer
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Start the server:**
    ```bash
    npm start
    ```
    Once the server is running, you will see the message: `Server running on port 3000`.

---

## API Reference

The API provides two main endpoints for encoding and decoding text.

### Tokenize Text

This endpoint converts a string of text into a sequence of numerical tokens.

```http
POST /api/encode
```

**Body Parameters**

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `text`    | `string` | **Required**. The input text to tokenize. |

**Example Request:**

```json
{
    "text": "Example Request"
}
```

**Example Response:**

```json
{
    "tokens": [
        31,
        24,
        1,
        13,
        16,
        12,
        5,
        98,
        44,
        5,
        17,
        21,
        5,
        19,
        20
    ]
}
```

### Detokenize Tokens

This endpoint converts a sequence of numerical tokens back into a string of text.

```http
POST /api/decode
```

**Body Parameters**

| Parameter | Type    | Description                               |
| :-------- | :------ | :---------------------------------------- |
| `tokens`  | `array` | **Required**. An array of integer tokens. |

**Example Request:**

```json
{
    "tokens": [
        31,
        24,
        1,
        13,
        16,
        12,
        5,
        98,
        44,
        5,
        17,
        21,
        5,
        19,
        20
    ]
}
```

**Example Response:**

```json
{
    "text": "Example Request"
}
```

---

## API in Action

Here are screenshots demonstrating the API endpoints.

**Encoding Text:**

[![Demo of Encode API](https://i.postimg.cc/D0xkw6jw/Screenshot-2025-08-12-130610.png)](https://postimg.cc/m116dYWv)

**Decoding Tokens:**

[![Demo of Decode API](https://i.postimg.cc/qMFSDzWS/Screenshot-2025-08-12-130944.png)](https://postimg.cc/qz81zMJx)
