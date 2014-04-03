##reed-solomon

A Javascript implementation of the Reed-Solomon erasure coding algorithm.

###Classes

_**ReedSolomon**_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public-facing interface providing encode/decode methods

_**ReedSolomon.Codec**_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Implements the ReedSolomon erasure coding algorithm

_**ReedSolomon.GaloisField**_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Implements a Galois field GF(p^n) over p = 2

_**ReedSolomon.Utils**_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Implements string and array manipulation methods

###Configuration

The `ReedSolomon` constructor accepts the length of a codeword `n` as a parameter.
The code will have error correcting power `(n-k)/2`, where `k` is the message length.

###Usage
  
```javascript
// n is the length of a codeword
var rs = new ReedSolomon(n);
var enc = rs.encode('hello world');
var msg = rs.decode(enc);
```

###Dependencies

Depends on `class.js` (included in this repository under the `lib/` directory).

###License

This code is licensed under the GPL v3.
