# node-fetch-web-streams

🎏 Brings the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with the [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) to Node.js 

> This is a combination of multiple forks:
> - https://github.com/node-fetch/node-fetch/tree/2.x
> - https://github.com/titel-media/node-fetch 
> - https://github.com/dollarshaveclub/node-fetch
> - https://github.com/coreybutler/node-fetch

For more context: https://github.com/node-fetch/node-fetch/issues/387

## Features

- [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
  - [x] [`ReadableStreamBYOBReader`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader)
  - [x] [`ReadableByteStreamController`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController)
    - [x] [`byobRequest`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest)
- [`Body`](https://developer.mozilla.org/en-US/docs/Web/API/Body)
  - [x] [`body`](https://developer.mozilla.org/en-US/docs/Web/API/Body/body)
  - [x] [`bodyUsed`](https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed)
  - [x] [`arrayBuffer()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/arrayBuffer)
  - [x] [`blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/blob)
  - [x] [`formData()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/formData)
  - [x] [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
  - [x] [`text()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/text)
- [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
  - [x] [`size`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/size)
  - [x] [`type`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type)
  - [x] [`arrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer)
  - [x] [`slice`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice)
  - [ ] [`stream`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream)
  - [x] [`text`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text)