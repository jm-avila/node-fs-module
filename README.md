# Node.js fs module

The fs module provides a lot of very useful functionality to access and interact with the file system. There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it.

## fs.open & fs.openSync

Asynchronous file open. You'd call fs.open() if you want to perform several actions on a file since you wouldn't want to constantly reopen and reclose the same file if you're working on it. You will need to close the file by calling fs.close().

Returns an integer representing the file descriptor.

```javascript
fs.open(path, flags, mode, callback);
fs.openSync(path, flags, mode);
```

Where:

- path (string | Buffer | URL)
- flags (string | number)
  - Default: 'r'.
  - The operation in which file has to be opened.
- mode (string | integer)
  - Default: 0o666 (readable and writable)
  - Sets the file mode, but only if the file was created.
- callback (Function)
  - A callback function that is called after reading a file.
  - The callback gets two arguments (err, fd).
    - err (Error)
    - fd (integer)

Note: fs.openSync is the asynchronous version.

Flags:

- r
  - To open file to read and throws exception if file doesn’t exists.
- r+
  - Open file to read and write. Throws exception if file doesn’t exists.
- rs+
  - Open file in synchronous mode to read and write.
- w
  - Open file for writing. File is created if it doesn’t exists.
- wx
  - It is same as ‘w’ but fails if path exists.
- w+
  - Open file to read and write. File is created if it doesn’t exists.
- wx+
  - It is same as ‘w+’ but fails if path exists.
- a
  - Open file to append. File is created if it doesn’t exists.
- ax
  - It is same as ‘a’ but fails if path exists.
- a+
  - Open file for reading and appending. File is created if it doesn’t exists.
- ax+
  - It is same as ‘a+’ but fails if path exists.
