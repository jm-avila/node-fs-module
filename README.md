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

## fs.writeFile()

When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. When file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended). **This means that you can directly pass the file path or open the file and pass the file descriptor (fd).**

data can be a string or a buffer.

```javascript
fs.writeFile(file, data[, options], callback)#
```

Where:

- file (string) | (Buffer) | (URL) | (integer)
  - filename or file descriptor
- data (string) | (Buffer) | (TypedArray) | (DataView) | (Object)
- options (Object) | (string)
  - encoding (string) | (null)
    - Default: 'utf8'
  - mode (integer)
    - Default: 0o666
  - flag (string)
    - Default: 'w'.
- callback (Function)
  - err (Error)

The encoding option is ignored if data is a buffer. If data is a normal object, it must have an own toString function property.
If options is a string, then it specifies the encoding.
It is unsafe to use fs.writeFile() multiple times on the same file without waiting for the callback. For this scenario, fs.createWriteStream() is recommended.

**Using fs.writeFile() with file descriptors**:
When file is a file descriptor, the behavior is almost identical to directly calling fs.write(). The difference from directly calling fs.write() is that under some unusual conditions, fs.write() might write only part of the buffer and need to be retried to write the remaining data, whereas fs.writeFile() retries until the data is entirely written (or an error occurs).

The implications of this are a common source of confusion. In the file descriptor case, the file is not replaced! The data is not necessarily written to the beginning of the file, and the file's original data may remain before and/or after the newly written data.

## fs.readdir()

Asynchronous readdir. Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

```javascript
fs.readdir(path[, options], callback)#
```

Where:

- path (string) | (Buffer) | (URL)
- options (string) | (Object)
- encoding (string)
  - Default: 'utf8
- withFileTypes (boolean)
  - Default: fals
- callback Function
  - err Error
  - files (string[]) | (Buffer[]) | (fs.Dirent[])

The optional options argument can be a string specifying an encoding, or an object with an encoding property specifying the character encoding to use for the filenames passed to the callback. If the encoding is set to 'buffer', the filenames returned will be passed as Buffer objects.

If options.withFileTypes is set to true, the files array will contain fs.Dirent objects.

## fs.mkdir()

Asynchronously creates a directory.

```javascript
fs.mkdir(path[, options], callback)
```

Where:

- path (string) | (Buffer) | (URL)
- options (Object) | (integer)
  - The optional options argument can be an integer specifying mode (permission and sticky bits), or an object with a mode property and a recursive property indicating whether parent directories should be created.
  - recursive (boolean)
    - Default: false
    - Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
  - mode (string) | (integer)
    - Default: 0o777.
- callback (Function)
  - The callback is given a possible exception and, if recursive is true, the first directory path created, (err, [path]).
  - err (Error)

## fs.createReadStream()

fs.createReadStream(path[, options])#

Where:

- path (string) | (Buffer) | (URL)
- options (string) | (Object)
  - flags (string)
    - Default: 'r'.
  - encoding (string)
    - Default: null
  - fd (integer)
    - Default: null
  - mode (integer)
    - Default: 0o666
  - autoClose (boolean)
    - Default: true
  - emitClose (boolean)
    - Default: false
  - start (integer)
  - end (integer)
    - Default: Infinity
  - highWaterMark (integer)
    - Default: 64 \* 1024
  - fs (Object) | (null)
    - Default: null
- Returns: (fs.ReadStream)

options can include start and end values to read a range of bytes from the file instead of the entire file. Both start and end are inclusive and start counting at 0, allowed values are in the [0, Number.MAX_SAFE_INTEGER] range. If fd is specified and start is omitted or undefined, fs.createReadStream() reads sequentially from the current file position. The encoding can be any one of those accepted by Buffer.

If fd is specified, ReadStream will ignore the path argument and will use the specified file descriptor. This means that no 'open' event will be emitted. fd should be blocking; non-blocking fds should be passed to net.Socket.

If fd points to a character device that only supports blocking reads (such as keyboard or sound card), read operations do not finish until data is available. This can prevent the process from exiting and the stream from closing naturally.

By default, the stream will not emit a 'close' event after it has been destroyed. This is the opposite of the default for other Readable streams. Set the emitClose option to true to change this behavior.

By providing the fs option, it is possible to override the corresponding fs implementations for open, read, and close. When providing the fs option, overrides for open, read, and close are required.

If autoClose is false, then the file descriptor won't be closed, even if there's an error. It is the application's responsibility to close it and make sure there's no file descriptor leak. If autoClose is set to true (default behavior), on 'error' or 'end' the file descriptor will be closed automatically.

mode sets the file mode (permission and sticky bits), but only if the file was created.

If options is a string, then it specifies the encoding.
