# Node.js fs module

The fs module provides a lot of very useful functionality to access and interact with the file system. There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it.

## fs.open()

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

## fs.stat()

Used to return information about the given file or directory. It returns an fs.Stats object which has several properties and methods to get details about the file or directory.

A fs.Stats object provides information about a file.

## fs.read()

Read data from the file specified by fd.

```javascript
fs.read(fd, [options,] callback)
```

Where:

- fd (integer)
- options (Object)
  - buffer (Buffer | TypedArray | DataView)
    - Default: Buffer.alloc(16384)
    - the buffer that the data (read from the fd) will be written to.
  - offset (integer)
    - Default: 0
    - the offset in the buffer to start writing at.
  - length (integer)
    - Default: buffer.length
    - an integer specifying the number of bytes to read.
  - position (integer)
    - Default: null
    - an argument specifying where to begin reading from in the file. If position is null, data will be read from the current file position, and the file position will be updated. If position is an integer, the file position will remain unchanged.
- callback (Function)
  - The callback is given the three arguments, (err, bytesRead, buffer).
    - err (Error)
    - bytesRead (integer)
    - buffer (Buffer)

If the file is not modified concurrently, the end-of-file is reached when the number of bytes read is zero.

If this method is invoked as its util.promisify() ed version, it returns a Promise for an Object with bytesRead and buffer properties.

## fs.readfile()

Asynchronously reads the entire contents of a file. Returns the contents of the path.

```javascript
fs.readFile(path, options, callback);
```

Where:

- path (string) | (Buffer) | (URL) | (integer)
  - filename or file descriptor
- options (Object) | (string)
  - encoding (string) | (null)
    - Default: null
    - If no encoding is specified, then the raw buffer is returned.
  - flag (string)
    - Default: 'r'
- callback (Function)
  - The callback is passed two arguments (err, data), where data is the contents of the file.
    - err (Error)
    - data (string) | (Buffer)

When the path is a directory, the behavior of fs.readFile() and fs.readFileSync() is platform-specific. On macOS, Linux, and Windows, an error will be returned. On FreeBSD, a representation of the directory's contents will be returned.

The fs.readFile() function buffers the entire file. To minimize memory costs, when possible prefer streaming via fs.createReadStream().

**File descriptors**:

1. Any specified file descriptor has to support reading.
2. If a file descriptor is specified as the path, it will not be closed automatically.
3. The reading will begin at the current position.

## fs.write()

Write buffer to the file specified by fd. If buffer is a normal object, it must have an own toString function property.

```javascript
fs.write(fd, buffer[, offset[, length[, position]]], callback)
```

Where:

- fd (integer)
- buffer (Buffer) | (TypedArray) | (DataView) | (string) | (Object)
- offset (integer)
  - offset determines the part of the buffer to be written.
- length (integer)
  - length is an integer specifying the number of bytes to write.
- position (integer)
  - position refers to the offset from the beginning of the file where this data should be written. If typeof position !== 'number', the data will be written at the current position.
- callback (Function)
  - The callback will be given three arguments (err, bytesWritten, buffer) where bytesWritten specifies how many bytes were written from buffer.
    - err (Error)
    - bytesWritten (integer)
    - buffer (Buffer) | (TypedArray) | (DataView)

If this method is invoked as its util.promisify() ed version, it returns a Promise for an Object with bytesWritten and buffer properties.

It is unsafe to use fs.write() multiple times on the same file without waiting for the callback. For this scenario, fs.createWriteStream() is recommended.

On Linux, positional writes don't work when the file is opened in append mode. The kernel ignores the position argument and always appends the data to the end of the file.
